import React from 'react'
import {Box,Flex,Text,Heading,Image,Button} from '@chakra-ui/react'
import { BannerOne } from '../../utilities/assetIndex'
import {  useNavigate } from 'react-router-dom';
const sendWhatsapp = () => {
  window.location.href = "https://wa.me/+255716285421";
};



const BannerApp = () => {
  const navigate = useNavigate();
  const airtableRegistration  = ()=>{
    navigate('register-school')
   
  }
  return (
   <Box backgroundColor='brand.purpleOne'   width='100%'  >
<Flex  direction={{md:'column',lg:'row',sm:'column',base:'column'}} >

    {/* First box to display banner text */}
    <Box flex={1} flexGrow={1} pt={20} pl={10} >
      <Flex direction='column' >
        <Heading color='brand.blackOne' as='h1' fontSize={50}>Revolutionize<br /> school timetabling<br/> with DevHeroes.</Heading>
        <Text pt={7} color='brand.blackTwo' fontSize={20}>
        Say goodbye to manual timetabling and <br/> hello to efficiency and accuracy with our <br/>innovative technology.
        </Text>
        <Button onClick={airtableRegistration} backgroundColor='brand.purpleTwo' color='brand.whiteColor'   width={{md:'30%',sm:'30%',base:'30%', 'lg': '20%'}}  py={6} mt={5}>
    Get Started
  </Button>
      </Flex>
    </Box>

    {/* Second Box to display banner image */}
    <Box width={{md:'100%',sm:'100%',base:'100%'}} pt={{md:'10',sm:'10',base:'10', lg:'0'}} height='100%'    flex={1} flexGrow={1}>
      <Image    src={BannerOne} />
    </Box>
</Flex>
   </Box>
  )
}

export default BannerApp