import { Project } from "ts-morph";
import { compile } from "json-schema-to-typescript"
import { catchAsync } from "./utils.ts"
import { writeFile } from "node:fs/promises"
import { log } from "node:console"
import schema_data from "./schema_data.ts";

const project = new Project({ compilerOptions: { outDir: "dist/types", declaration: true } })
async function main() {
    const schema_root = "https://raw.githubusercontent.com/Blockception/Minecraft-bedrock-json-schemas/main/"

    for (const { schema_path, root_name, destination } of schema_data) {
        log("Creating " + root_name)
        const [schema_req, fetch_error] = await catchAsync(fetch(schema_root + schema_path))
        if (fetch_error) {
            throw fetch_error
        }

        const schema = await schema_req.json()

        schema.title = root_name

        let [typescript_types, compile_error] = await catchAsync(compile(schema, 'MySchema', {
            format: false
        }))
        if (compile_error) {
            throw compile_error
        }

        // dirty, but faster than removing all exports with ts-morph
        typescript_types = typescript_types.replace(/export /g, "")

        const file = project.createSourceFile(destination, typescript_types);

        const root_type_interface = file.getInterface(root_name)
        const root_type_alias = file.getTypeAlias(root_name)
        if (root_type_interface) {
            root_type_interface.setIsExported(true)
        } else if (root_type_alias) {
            root_type_alias.setIsExported(true)
        } else {
            throw Error(`Could not find interface or type alias with name: ${root_name}`)
        }
    }

    project.emit()

    writeFile("dist/index.d.ts", schema_data.map(
        ({ root_name, destination }) => {
            return `export { ${root_name} } from "./types/${destination.split(".").at(0)}";`
        }).join("\n")
    )
}

main()