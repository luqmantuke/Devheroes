import React from 'react'
import {Box,Flex,Text,Divider, Button,IconButton} from '@chakra-ui/react'
import {RiFacebookLine,RiInstagramLine,RiTwitterLine,RiLinkedinLine} from 'react-icons/ri'
const sendWhatsapp = () => {
  window.location.href = "https://wa.me/+255716285421";
};

const TitleTryFree = () => (<Flex justifyContent='space-between' direction={{md:'column',lg:'row',sm:'column',base:'column'}} >

          <Text color='brand.whiteColor' fontSize={30} fontWeight='semibold'>
          Revolutionize school timetabling<br/> with DevHeroes.
          </Text>

          <Button onClick={sendWhatsapp} backgroundColor='brand.purpleTwo' color='brand.whiteColor'   width={{md:'25%',sm:'25%',base:'25%', 'lg': '10%'}}  py={6} mt={5}>
  Try for free
</Button>
      </Flex>);

const GetInTouchFlex = () => (<Flex direction='column'>
  <Text fontWeight='semibold' fontSize={18} color='brand.whiteColor'>
Get In Touch
  </Text>
  <Text fontWeight='medium' color='brand.whiteColor'>
contact@devheroes.co.tz
  </Text> <Text fontWeight='medium' color='brand.whiteColor'>
  +255 716 285 421
  </Text>
  </Flex>);

const LocationFlex = () => (<Flex direction='column'>
  <Text fontWeight='semibold' fontSize={18} color='brand.whiteColor'>
Location
  </Text>
  <Text fontWeight='medium' color='brand.whiteColor'>
Arusha, Tanzania
  </Text> <Text fontWeight='medium' color='brand.whiteColor'>
  8am to 7pm
  </Text>
  </Flex>);
  const SocialIcon = ({ icon: Icon, ...props }) => {
    return (
      <IconButton
      mr={2}
        variant='unstyled'
        fontSize='20px'
        icon={<Icon color='white' />}
        {...props}
      />
    );
  };
  

const Footer = () => {
  return (
  <Box px={10} pt={10} pb={40} backgroundColor='brand.blueDark'  width='100%'>
    <Flex direction='column'>
        <TitleTryFree />
        <Divider color='brand.whiteThree' pt={10} mb={10} orientation='horizontal' />
        <Flex  direction={{md:'column',lg:'row',sm:'column',base:'column'}} >
    <Flex direction='row'>
    <SocialIcon icon={RiFacebookLine} />
    <SocialIcon icon={RiInstagramLine} />
    <SocialIcon icon={RiTwitterLine} />
    <SocialIcon icon={RiLinkedinLine} />
 
    </Flex>
    <Box w='180px' height={10} />
      
        <GetInTouchFlex />
        <Box w='180px' height={10} />
        <LocationFlex />
        </Flex>

    </Flex>

  </Box>
  )
}

export default Footer 