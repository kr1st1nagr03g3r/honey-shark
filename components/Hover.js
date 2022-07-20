import React, { useState } from 'react';
import Image from 'next/image';
import Eye from "/public/images/HypnoticEye.png"
import Container from '@mui/material/Container';
import Box from '@mui/material/Box'
import styles from "/styles/Test.module.css"



function App() {
    const [isShown, setIsShown] = useState(false);

    return (





        //         <Container fixed className="outer" >
        //             <style jsx>{`
        //  .eyeball > span > span > img {
        //     width: 50px;
        // }

        //             `} </style>
        //             <Box>
        //                 <div
        //                     className="eyeball"
        //                     onMouseEnter={() => setIsShown(true)}
        //                     onMouseLeave={() => setIsShown(false)}>
        //                     <Image src={Eye} alt="" />
        //                 </div>
        //                 {isShown && (
        //                     <div>
        //                         I&apos;ll appear when you hover over the button.
        //                     </div>
        //                 )}
        //             </Box>
        //         </Container>

        <Container fixed className={styles.container}>
            <Container className="boxWrapper" >
                <Box >
                    <p>Content</p>
                </Box>




            </Container>

        </Container>

    );
}

export default App;