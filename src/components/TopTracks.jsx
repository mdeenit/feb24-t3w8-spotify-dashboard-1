
import { useSpotifyProfileData } from "../contexts/SpotifyProfileProvider";

export function TopTracks(){
    let {topTracks} = useSpotifyProfileData();

    if (topTracks.items && topTracks.items.length > 0){
        return (
            <div id="topTracksContainer">
                {topTracks.items.map((track ) => {
                    return <div className="trackCard"> 
                    <h>{track.name}</h>
                    <h2>{track.name}</h2>
                    <img src=
                })}
            </div>
        )
    }




}

