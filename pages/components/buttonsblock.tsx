import QuestionAnswerTwoToneIcon from '@mui/icons-material/QuestionAnswerTwoTone';
import CasesTwoToneIcon from '@mui/icons-material/CasesTwoTone';
import Button from '@mui/material/Button';
import { Stack } from "@mui/material";
import { Box } from "@mui/system";

function ButtonBlock() {
    return (
        <Box style={{
            paddingTop: 20,
            paddingBottom:40
          }}>
          <Stack
            direction="row"
            spacing={5}
          >
            <Button
              key="help_btn"
              startIcon={<QuestionAnswerTwoToneIcon sx={{ fontSize: 30 }}/>}
              color='inherit'
              sx={{fontFamily: "Viga"}}
            >
              Helper Center
            </Button>
            <Button
              key="commerce_btn"
              startIcon={<CasesTwoToneIcon sx={{ fontSize: 30 }}/>}
              color='inherit'
              sx={{fontFamily: "Viga"}}
            >
              Commerce
            </Button>
          </Stack>
        </Box>
    )
}

export default ButtonBlock;