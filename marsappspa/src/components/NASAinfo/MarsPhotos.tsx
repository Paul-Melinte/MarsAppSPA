import React, { useEffect, useState } from "react";
import axios from "axios";
import Select from "react-select"
import "./MarsPhotos.css"

export const MarsPhotos: React.FC = () => {
    const [roverSelectApiData, setRoverSelectApiData] = useState<any[]>([]);
    const [selectedRover, setSelectedRover] = useState("");
    const [cameraSelectData, setCameraSelectData] = useState<any[]>([]);
    const [selectedCamera, setSelectedCamera] = useState("");
    const [maxSol, setMaxSol] = useState(0);
    const [selectedSol, setSelectedSol] = useState(0);
    const [MarsPhotos, setMarsPhotos] = useState<any[]>([]);

    const getRoverData = async () => {
        const roverData = await axios.get("http://localhost:8000/api/rovers/");
        
        const rovers: any[] = roverData.data;

        const selectRovers = rovers.map(rover => ({
            "value": rover,
            "label": rover.name
        }));

        setRoverSelectApiData(selectRovers);
    };

    useEffect(() => {
        getRoverData();
    },[]);

    function onRoverSelect(event: any) {
        setSelectedRover(event.label);

        const cameras: any[] = event.value.cameras;

        setCameraSelectData(cameras.map(camera => ({
            "value": camera,
            "label": camera
        })));

        setMaxSol(event.value.max_sol);
    }

    function onCameraSelect(event: any) {
        setSelectedCamera(event.label);
    }

    function onSolChange(event: any){
        setSelectedSol(event.target.value);
    }

    async function handleSubmit() {
        const photoData: any[] = await axios.get("http://localhost:8000/api/rovers/" 
                                    + selectedRover 
                                    + "/photos/"
                                    + selectedCamera 
                                    + "?sol="
                                    + selectedSol);
        
        console.log(photoData);
        setMarsPhotos(photoData.slice(0,5));
    }

    return (
        <form className="Mars-form" onSubmit={handleSubmit}>
            <label>
                Select Rover:
                <Select name="roverSelect" options={roverSelectApiData} className="Mars-select" onChange={onRoverSelect}/>
            </label>
            <label>
                Select camera:
                <Select name="cameraSelect" options={cameraSelectData} onChange={onCameraSelect}/>
            </label>
            <label>
                Select Mars day, maximum {maxSol}
                <input type="number" value={selectedSol} onChange={onSolChange}/>
            </label>
            <input type="submit" value="Get Mars photos" />
        </form>
    );
}