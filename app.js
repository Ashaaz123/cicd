let stages = [];

const pipelineContainer = document.getElementById("pipelineContainer");
const addStageBtn = document.getElementById("addStageBtn");

addStageBtn.addEventListener("click", () => {

    const stageName = prompt("Enter stage name:");

    if (!stageName || stageName.trim() === "") {
        return;
    }

    stages.push(stageName.trim());

    renderPipeline();
});

function renderPipeline() {

    pipelineContainer.innerHTML = "";

    stages.forEach((stage, index) => {

        const stageDiv = document.createElement("div");
        stageDiv.className = "stage";

        const stageTitle = document.createElement("span");
        stageTitle.textContent = stage;

        const upBtn = document.createElement("button");
        upBtn.textContent = "⬆";

        const downBtn = document.createElement("button");
        downBtn.textContent = "⬇";

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";

        upBtn.addEventListener("click", () => moveUp(index));
        downBtn.addEventListener("click", () => moveDown(index));
        deleteBtn.addEventListener("click", () => deleteStage(index));

        stageDiv.appendChild(stageTitle);
        stageDiv.appendChild(document.createElement("br"));
        stageDiv.appendChild(upBtn);
        stageDiv.appendChild(downBtn);
        stageDiv.appendChild(deleteBtn);

        pipelineContainer.appendChild(stageDiv);
    });
}

function deleteStage(index) {

    stages.splice(index, 1);

    renderPipeline();
}

function moveUp(index) {

    if (index === 0) {
        return;
    }

    [stages[index], stages[index - 1]] =
    [stages[index - 1], stages[index]];

    renderPipeline();
}

function moveDown(index) {

    if (index === stages.length - 1) {
        return;
    }

    [stages[index], stages[index + 1]] =
    [stages[index + 1], stages[index]];

    renderPipeline();
}