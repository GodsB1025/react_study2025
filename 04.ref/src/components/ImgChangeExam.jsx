import React, { useRef, useState } from "react";

// const ImgChangeExam = () => {
//     const imgRef = useRef("뭉치1");
//     const path = `../src/assets/img/${imgRef.current}.jpg`;

//     const [img, setImg] = useState(path);

//     const change = (e) => {
//         e.preventDefault();
//         const changePath = `../src/assets/img/${imgRef.current.value}.jpg`;
//         setImg(changePath);
//     };
//     return (
//         <div>
//             <p>희망하는 사진이 있으신가요?</p>
//             <div>
//                 <input type="text" ref={imgRef} />
//                 <input type="submit" onClick={change} value={"변경"} />
//             </div>
//             <img src={img} alt="뭉치" width={300} />
//         </div>
//     );
// };

const ImgChangeExam = () => {
    let keywordRef = useRef();
    let imgRef = useRef();

    const change = (e) => {
        e.preventDefault();

        if (keywordRef.current.value === "강아지") {
            imgRef.current.src = "../src/assets/img/뭉치2.jpg";
        } else {
            imgRef.current.src = "../src/assets/img/뭉치3.jpg";
        }

        // 입력창 내용을 초기화하고 해당 요소를 선택(focus)하는 기능
        keywordRef.current.value = "";
        keywordRef.current.focus();
    };
    return (
        <div>
            <p>희망하는 사진이 있으신가요?</p>
            <div>
                <input type="text" ref={keywordRef} />
                <input type="submit" onClick={change} value={"변경"} />
            </div>
            <img src={"../src/assets/img/뭉치1.jpg"} ref={imgRef} alt="뭉치" width={300} />
        </div>
    );
};

export default ImgChangeExam;
