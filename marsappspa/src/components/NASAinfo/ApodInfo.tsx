import axios from "axios";
import React, { useEffect, useState } from "react";
import { GenericInfo } from "../GenericInfo/GenerericInfo";
import { InfoInterface } from "../GenericInfo/InfoInterface";

export const ApodInfo: React.FC = () => {
    const [ApodData, setApodData] = useState<InfoInterface>({
        title: "",
        photo: "",
        firstParagraph: "",
        secondParagraph: ""
    });

    const getApodData = async () => {
        const ApodRes = await axios.get("http://localhost:8000/api/apod/");

        setApodData({
            title: ApodRes.data.title,
            photo: ApodRes.data.url,
            firstParagraph: ApodRes.data.explanation,
            secondParagraph: ApodRes.data.copyright
        })
    };

    useEffect(() => {
        getApodData();
    },[]);

    return (
        <GenericInfo info={ApodData} />
    );
}