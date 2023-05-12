import React from 'react'
import {Box,Flex,Text,Button,Card,CardBody,CardFooter,Stack,Heading,Image} from '@chakra-ui/react'
import { Planning,WebDevelopment,TimeTableCreation } from '../../utilities/assetIndex'
const WhatWeDo = () => {
  return (
    <Box pl={{md:'5',lg:'10',sm:'5',base:'5'}} pb={20} backgroundColor='brand.whiteTwo' width='100%' >
        <Flex  pt={20}  direction={{md:'column',lg:'row',sm:'column',base:'column'}}>
            {/* First Box */}
            <Box>
                <Flex flex={1} flexGrow={1} direction='column'>
                <Text  color='brand.blackTwo'fontWeight='semibold' fontSize={18} >
                WHAT WE DO?
        </Text>   
        <Text pt={6} color='brand.blackOne' fontWeight='semibold' fontSize={35}>
        Let DevHeroes be your hero <br/> and solve your technology problems.
        </Text>   
        <Text color='brand.blackTwo' pt={6}>
        Let DevHeroes be your hero and solve your technology problems.


        </Text>
        <Button backgroundColor='brand.purpleTwo' color='brand.whiteColor'   width={{md:'30%',sm:'30%',base:'30%', 'lg': '20%'}}  py={6} mt={5}>
    More Details
  </Button>
                </Flex>
            </Box>
{/* Second Box */}
<Box maxWidth={{md: '100%', md: '100%', sm: '100%', lg: '50%'}}>
    <Flex direction='column' flex={1} >

    <Card
    p={8}
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='filled'
  fill='white'
  backgroundColor='white'

>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src={Planning}
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading color='brand.blackOne' size='md'>Planning</Heading>

      <Text color='brand.blackTwo' py='2'>
      our technology helps schools create effective and accurate timetables, ensuring that students and teachers can make the most of their time. Let us help you achieve success through proper planning.
      </Text>
    </CardBody>

   
  </Stack>
</Card>
    </Flex>
</Box>
        </Flex>
    </Box>
  )
}

export default WhatWeDo