import React, { useEffect, useState } from "react";
import axios from "axios";
import Select from "react-select"
import "./MarsPhotos.css"
import { PhotoDisplay } from "../PhotoDisplay";

export const MarsPhotos: React.FC = () => {
    const [roverSelectApiData, setRoverSelectApiData] = useState<any[]>([]);
    const [selectedRover, setSelectedRover] = useState("");
    const [cameraSelectData, setCameraSelectData] = useState<any[]>([]);
    const [selectedCamera, setSelectedCamera] = useState("");
    const [maxSol, setMaxSol] = useState(0);
    const [selectedSol, setSelectedSol] = useState(0);
    const [MarsPhotos, setMarsPhotos] = useState<string[]>([]);

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

    const getPhotoData = async () => {
        const photoData = await axios.get("http://localhost:8000/api/rovers/" 
                                            + selectedRover 
                                            + "/photos/"
                                            + selectedCamera 
                                            + "?sol="
                                            + selectedSol);
        
        console.log(photoData);

        const photoUrls: string[] = [];
        photoData.data.forEach((photo: any) => photoUrls.push(photo.img_url));

        setMarsPhotos(photoUrls);
    };


    function handleSubmit(event: any) {
        getPhotoData();
        event.preventDefault();
    }

    return (
        <div>
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
        <PhotoDisplay photos={MarsPhotos}/>
        </div>
    );
}