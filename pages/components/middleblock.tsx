import { useState } from "react";
import { useAddress, useDisconnect } from "@thirdweb-dev/react";
import { useMagic } from "@thirdweb-dev/react/evm/connectors/magic";
import { Box } from "@mui/system";
import { Stack } from "@mui/material";
import NFTBlock from "./nftblock";
import styles from "../styles/Home.module.css";
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';

import Logo from "./logo";
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';
import Container from '@mui/material/Container';
import { amber } from '@mui/material/colors';

function MiddleBlock() {

    const address = useAddress(); // Hook to grab the currently connected user's address.
    const connectWithMagic = useMagic(); // Hook to connect with Magic Link.  
    const disconnectWallet = useDisconnect(); // Hook to disconnect from the connected wallet.
    const [email, setEmail] = useState<string>(""); // State to hold the email address the user entered.
    
    const handleKeyDown = (event: { key: string; }) => {
        if (event.key === 'Enter') {
            connectWithMagic({ email });
        }
      };

      const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
        color: theme.palette.getContrastText(amber[200]),
        backgroundColor: amber[200],
        '&:hover': {
          backgroundColor: amber[400],
        },
      }));

    return (
        <Container maxWidth="sm">
        {address ? (
            <Stack
                direction="column"
                style={{
                    marginTop: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    gap: 16,
            }}>
                <NFTBlock address={address} email={email}/>
                <ColorButton
                    onClick={() => disconnectWallet()}
                    endIcon={<LogoutTwoToneIcon/>}
                >
                    Logout
                </ColorButton>    
            </Stack>
                
        ) : (
            <Box sx={{marginTop:20}}>
                <Stack 
                    direction="row"
                    style={{
                        marginTop: 10,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        gap: 16,
                    }}
                >
                    <Logo/>
                    <input
                        type="email"
                        placeholder="Inter Email to see Your NFT's"
                        className={styles.textInput}
                        style={{ width: "416", marginTop: 90, marginBottom: 0 }}
                        onChange={(e) => setEmail(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                </Stack>
            </Box>
        )}
        </Container>
    )
}

export default MiddleBlock;
