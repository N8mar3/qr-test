import ImageList from '@mui/material/ImageList';
import { Box } from "@mui/system";
import NFTCards from './nftcard';
import styles from "../styles/Home.module.css";

function NFTBlock(props: any) {

  const address: string = props.address
  const email: string = props.email
  
  
  const apiUrlEndpoint = "https://qr-test-qr.vercel.app/api/sendWallet/";
  const postData = {
    method: "POST",
    headers: {
      "Content-Type":"application/json"
    },
    body: JSON.stringify({
      address: address,
      email: email
    })
  };

  if (address && email) {
    fetch(apiUrlEndpoint, postData);
  };
  
  return (
    <Box>
      <div className={styles.commonText1}>
        Connected:
      </div>
      <div className={styles.commonText2}>
        {address}
      </div>
      <ImageList
        sx={{ width: 600, height: 500 }} cols={3} rowHeight={200}
        gap={10}
      >
        <NFTCards address={address}/>
      </ImageList>

    </Box>
  )
}

export default NFTBlock;
