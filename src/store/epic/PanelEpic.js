import { PanelAction } from '../actions'
import { Observable } from 'rxjs'
import firebase from '../config'

class PanelEpic {
    static home = (action$) =>
        action$.ofType(PanelAction.HOME)
            .switchMap(({ payload }) => {
                let date = Date.now()
                console.log(payload, " payload")
                return Observable.fromPromise(
                    firebase.storage().ref(`pictur/${payload.file.name}`).put(payload.file).then((res) => {
                        // let time = new Date();
                        // let msg = {
                            // type: 'IMG',
                            // img: res.downloadURL,
                            // time: time.toString(),
                            // sender: firebase.auth().currentUser.uid,
                            // receiver: payload.receiver,
                            // seen: false
                        // }
                        console.log(res.downloadURL, " Ameen");
                    return { type: null }
                    })
                )
                // .map(() => {
                //     return ({
                //         type: null
                //     })
                // })

            })


}


export default PanelEpic;