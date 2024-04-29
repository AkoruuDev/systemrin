/*
https://rinwiki.vercel.app/universe/aux/voice/Um%20exemplo%20disso%20que%20eu%20poderia%20dar%20a%20voc%C3%AA,%20leitor,%20seriam%20os%20m%C3%A9diuns%20e%20pensadores%20que%20transcenderam%20suas%20%C3%A9pocas.
*/

import { useParams } from "react-router-dom"

function Voice() {
    const {voiceTxt} = useParams();
    
    return (
        <>{voiceTxt}</>
    )
};

export {
    Voice
}