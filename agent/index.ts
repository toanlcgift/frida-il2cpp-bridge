import "frida-il2cpp-bridge";

var fileName = "/mnt/shared/Pictures/output.txt";
File.writeAllText(fileName, "start");

Il2Cpp.perform(() => {

    File.writeAllText(fileName, "perform start");
    File.writeAllText(fileName, Il2Cpp.unityVersion);
    File.writeAllText(fileName, JSON.stringify(Il2Cpp.domain.assemblies.map(x => x.name)));
});



