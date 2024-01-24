import * as STG from 'shape-tree-in-solid-bench';


console.log("Starting to generate shapes and shapetrees");
const config: STG.Config = {
    pods_folder: "out-fragments/http/localhost_3000/pods",
    generate_shape: STG.getShapeFromPath,
    generate_shape_trees: STG.generateShapeTreesFile,
};
const errors = await STG.walkSolidPods(config);
if (errors === undefined) {
    console.log("Shapes and shapetrees generated");
} else {
    console.log(`There was ${errors.length} error(s)`)
}

