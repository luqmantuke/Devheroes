import React from 'react'
import {Box,Flex,Text,Button,Card,CardBody,CardFooter,Stack,Heading,Image} from '@chakra-ui/react'
import { Planning,WebDevelopment,TimeTableCreation } from '../../utilities/assetIndex'
const WhatWeDoCard = ({title,image,description}) => (<Card
    p={8}
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='filled'
  fill='white'
  backgroundColor='white'

>
  <Image
    objectFit='contain'
    maxW={{ base: '100%', sm: '200px' }}
    
    src={image}
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading color='brand.blackOne' size='md'>{title}</Heading>

      <Text color='brand.blackTwo' py='2'>
     {description}
      </Text>
    </CardBody>

   
  </Stack>
</Card>);
const WhatWeDo = () => {
  return (
    <Box pl={{md:'5',lg:'10',sm:'5',base:'5'}} pb={20} backgroundColor='brand.whiteTwo' width='100%' >
        <Flex  pt={20} direction='column'>
            {/* First Box */}
            <Box>
                <Flex flex={1} flexGrow={1} direction='column'>
                <Text  color='brand.blackTwo'fontWeight='semibold' fontSize={18} >
                WHAT WE DO?
        </Text>   
        <Text pt={6} color='brand.blackOne' fontWeight='semibold' fontSize={35}>
        Let DevHeroes be your hero <br/> and solve your technology problems.
        </Text>   
       
                </Flex>
            </Box>
{/* Second Box */}
<Box   maxWidth={{md: '100%', md: '100%', sm: '100%', lg: '70%'}}>
    
    <Flex  direction='column' flex={1}   >

    
    <WhatWeDoCard title='Timetable Creation' image={TimeTableCreation} description='Our technology takes into account all relevant constraints to provide a tailored solution that satisfies everyone involved. Say goodbye to scheduling headaches and hello to streamlined efficiency.' />

    <WhatWeDoCard title='Planning' image={Planning} description='our technology helps schools create effective and accurate timetables, ensuring that students and teachers can make the most of their time. Let us help you achieve success through proper planning.' />

    <WhatWeDoCard title='Design&Development' image={WebDevelopment} description='From designing and developing websites and web apps to creating effective and accurate timetables for schools, our team of experts is here to help you streamline your processes and solve your biggest challenges. Let us help you harness the power of technology today.' />
    </Flex>
</Box>
        </Flex>
    </Box>
  )
}

export default WhatWeDo