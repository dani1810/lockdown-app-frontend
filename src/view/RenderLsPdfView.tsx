import React from "react"

export interface CheckViewProperties {

}

const RenderLsPdfView = (props: CheckViewProperties) => {

    // from data-uri: data:application/pdf;base64,JVBER....=
    // to: objectURL
    const dataURItoBlob = (dataURI: any) => {
        var mime = dataURI.split(',')[0].split(':')[1].split(';')[0];
        var binary = atob(dataURI.split(',')[1]);
        var array = [];
        for (var i = 0; i < binary.length; i++) {
            array.push(binary.charCodeAt(i));
        }
        return new Blob([new Uint8Array(array)], {type: mime});
    }

    const dataUri: string = window.localStorage.getItem('Test1.pdf') as string;

    return (
        <iframe width="50%" height="500px" src={dataUri}></iframe>
    );
};


export default RenderLsPdfView;