

class PanelAction {
    //------ for epic --------
    static HOME = "HOME"

    //------ for reducer --------


    //------ for epic --------
    static home(obj) { return { type: PanelAction.HOME, payload: obj } }
    
}


export default PanelAction;