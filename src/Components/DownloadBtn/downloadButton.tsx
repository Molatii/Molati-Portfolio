import { Stack, Button } from "@chakra-ui/react";
import { BsFileEarmarkPdfFill } from "react-icons/bs";

export default function DownloadButton() {
  // download pdf file
  const downloadPdf = () => {
    fetch("molati_resume.pdf").then((response) => {
      response.blob().then((blob) => {
        // new pdf object
        const fileURL = window.URL.createObjectURL(blob);
        const alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "molati_resume.pdf";
        alink.click();
      });
    });
  };
  return (
    <Stack>
      <Button
        size="md"
        mt={{ base: "2%", md: "-2%" }}
        alignSelf="flex-end"
        w={{ base: "70%", md: "70%" }}
        color="#475C78"
        bg="white"
        onClick={downloadPdf}
        borderRadius="8px"
        _hover={{ bg: "blue.400", color: "white" }}
      >
        My resume
        <BsFileEarmarkPdfFill />
      </Button>
    </Stack>
  );
}
