import React from 'react'
import {Box,Flex,Text,Heading,Image,Button} from '@chakra-ui/react'

const WhyChooseUs = () => {
  return (
   <Box  backgroundColor='brand.whiteTwo' boxSize='container.lg'  width='100%' >

    <Flex direction='column'>
        <Box textAlign='center' pt={10} > 
      <Text color='brand.blackTwo'fontWeight='semibold' fontSize={18} >
      Why Choose Us?
        </Text>    
        <Text pt={10} color='brand.blackOne' fontWeight='semibold' fontSize={35}>
        Here are a few <Box as='span' color='brand.blueOne'>reasons</Box> why our <br />customers choose Devheroes.
        </Text>   
        </Box>

        <Flex pl={8} pt={20}  direction={{md:'column',lg:'row',sm:'column',base:'column'}}>
            <Box boxSize='30%' backgroundColor='brand.whiteColor'>

        <Flex direction='row'>
        <Text pr={3} color='brand.blueOne' fontWeight='semibold' fontSize={23}>1</Text>
        <Flex  direction='column'>
        <Text color='brand.blackOne' fontWeight='semibold' fontSize={17}>
            TimeTable
        </Text>
        <Text color='brand.blackTwo' fontWeight='medium'>
        Creating an effective and accurate timetable for schools is no easy feat. But with DevHeroes, you can simplify the process and achieve precision and ease.

        </Text>
        </Flex>
        </Flex>
            </Box>
        </Flex>
    </Flex>

   </Box>
  )
}

export default WhyChooseUs