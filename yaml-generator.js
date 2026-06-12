function generateYaml(stages) {

    let yaml = "stages:\n";

    stages.forEach(stage => {
        yaml += `  - ${stage.toLowerCase()}\n`;
    });

    yaml += "\n";

    stages.forEach(stage => {

        const stageName = stage.toLowerCase();

        yaml += `${stageName}:\n`;
        yaml += `  stage: ${stageName}\n\n`;

    });

    return yaml;
}