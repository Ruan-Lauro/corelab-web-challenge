
interface color {
    nameColor: string;
    cor: string;
    authentication: ()=> void;
    showColor: boolean;
}

export default function Color({nameColor, cor, authentication, showColor}:color){
    return(
        <main style={showColor?({display:"none"}):(nameColor==="branco"?({width:"35px", height:"35px", backgroundColor:cor, borderRadius:"50%", marginRight:"10px", cursor:"pointer", border:"1px solid black"}):({width:"35px", height:"35px", backgroundColor:cor, borderRadius:"50%", marginRight:"10px", cursor:"pointer"}))} onClick={authentication}>
        </main>
    );
}