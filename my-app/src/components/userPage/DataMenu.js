import { useState } from "react";
import { Button, FormControl, FormLabel, Input, VStack } from "@chakra-ui/react";

const DataMenu = ({ clearData, handleAddHashes }) => {
  const [projectHashesInput, setProjectHashesInput] = useState([]);
  const [dataHashInput, setDataHashInput] = useState("");
  const [showMintMenu, setShowMintMenu] = useState(false);

  return (
    <VStack spacing={4}>
      <Button mt={4} colorScheme="red" onClick={() => setShowMintMenu(!showMintMenu)} _hover={{ bg: "red.600", boxShadow: "md", transform: "scale(1.05)"}}>
        Data Menu
      </Button>
      {showMintMenu && (
        <>
          <Button colorScheme="yellow" mt={4} onClick={clearData} _hover={{ bg: "yellow.600", boxShadow: "md", transform: "scale(1.05)"}}>
            Clear all Data
          </Button>
          <Button colorScheme="teal" mt={4} onClick={handleAddHashes} _hover={{ bg: "teal.600", boxShadow: "md", transform: "scale(1.05)"}}>
            Push Project Hashes
          </Button>

          <FormControl id="projectHashes" mt={4}>
            <FormLabel>Project Hashes (comma-separated)</FormLabel>
            <Input
              type="text"
              placeholder="Enter Project Hashes"
              onChange={(event) =>
                setProjectHashesInput(event.target.value.split(","))
              }
            />
          </FormControl>

          <FormControl id="dataHash" mt={4}>
            <FormLabel>Data Hash</FormLabel>
            <Input
              type="text"
              placeholder="Enter Data Hash"
              value={dataHashInput}
              onChange={(event) => setDataHashInput(event.target.value)}
            />
          </FormControl>
        </>
      )}
    </VStack>
  );
};

export default DataMenu;
