gdjs.IntroCode = {};
gdjs.IntroCode.localVariables = [];
gdjs.IntroCode.GDIntroObjects1= [];
gdjs.IntroCode.GDIntroObjects2= [];
gdjs.IntroCode.GDavan_95231arObjects1= [];
gdjs.IntroCode.GDavan_95231arObjects2= [];
gdjs.IntroCode.GDbg_9595introObjects1= [];
gdjs.IntroCode.GDbg_9595introObjects2= [];
gdjs.IntroCode.GDcursorObjects1= [];
gdjs.IntroCode.GDcursorObjects2= [];


gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDavan_959595231arObjects1Objects = Hashtable.newFrom({"avançar": gdjs.IntroCode.GDavan_95231arObjects1});
gdjs.IntroCode.asyncCallback13197508 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.IntroCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Intro2", false);
}gdjs.IntroCode.localVariables.length = 0;
}
gdjs.IntroCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.IntroCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.IntroCode.asyncCallback13197508(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.IntroCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.IntroCode.GDcursorObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDcursorObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.IntroCode.GDcursorObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDcursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.IntroCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDcursorObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("avançar"), gdjs.IntroCode.GDavan_95231arObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDavan_959595231arObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_press.mp3", false, 40, 1);
}{gdjs.evtTools.sound.fadeSoundVolume(runtimeScene, 2, 0, 0.5);
}
{ //Subevents
gdjs.IntroCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtsExt__PauseFocusLost__Active.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets\\audio_01.mp3", 2, false, 100, 1);
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets\\bgm_music.mp3", 1, true, 20, 1);
}}

}


};

gdjs.IntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.IntroCode.GDIntroObjects1.length = 0;
gdjs.IntroCode.GDIntroObjects2.length = 0;
gdjs.IntroCode.GDavan_95231arObjects1.length = 0;
gdjs.IntroCode.GDavan_95231arObjects2.length = 0;
gdjs.IntroCode.GDbg_9595introObjects1.length = 0;
gdjs.IntroCode.GDbg_9595introObjects2.length = 0;
gdjs.IntroCode.GDcursorObjects1.length = 0;
gdjs.IntroCode.GDcursorObjects2.length = 0;

gdjs.IntroCode.eventsList1(runtimeScene);
gdjs.IntroCode.GDIntroObjects1.length = 0;
gdjs.IntroCode.GDIntroObjects2.length = 0;
gdjs.IntroCode.GDavan_95231arObjects1.length = 0;
gdjs.IntroCode.GDavan_95231arObjects2.length = 0;
gdjs.IntroCode.GDbg_9595introObjects1.length = 0;
gdjs.IntroCode.GDbg_9595introObjects2.length = 0;
gdjs.IntroCode.GDcursorObjects1.length = 0;
gdjs.IntroCode.GDcursorObjects2.length = 0;


return;

}

gdjs['IntroCode'] = gdjs.IntroCode;
