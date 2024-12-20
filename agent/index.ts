import "frida-il2cpp-bridge";

Il2Cpp.perform(() => {
    const coreModule = Il2Cpp.domain.assembly("UnityEngine.CoreModule").image;
    const sceneManager = coreModule.class("UnityEngine.SceneManagement.SceneManager");
    const scene = coreModule.class("UnityEngine.SceneManagement.Scene");
    console.log(scene.fields);
    console.log(scene.methods);
    
    
    const getActiveScene = sceneManager.method("GetActiveScene");
    const resultScene = getActiveScene.invoke();
    const sceneName = (resultScene as Il2Cpp.Object).tryField("name");

    console.log(sceneName);
});



