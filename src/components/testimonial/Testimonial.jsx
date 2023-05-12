import React from 'react'
import {Box,Flex,Text,Card,CardHeader,Avatar,Heading,CardBody,Image} from '@chakra-ui/react'

const TestimonialCard = () => (<Card maxW='sm'  margin={2} >
         
   <CardHeader>
     <Flex spacing='4'>
       <Flex  flex='1' gap='4'  alignItems='center' flexWrap='wrap'>
         <Avatar name='Frank Manyinyi' src='https://bit.ly/sage-adebayo' />
       
         <Box>
           <Heading size='sm'>Frank Manyinyi</Heading>
           <Text>Academic Master,Edmund Rice</Text>
         </Box>
       </Flex>
             
     </Flex>
   </CardHeader>
   <CardBody>
     <Text>
     We have been using the DevHeroes Timetable solution for the past few months at Edmund Rice Sinon Secondary School, and it has been a game-changer for us. The solution has significantly reduced the workload of our academic staff, enabling them to focus more on teaching and engaging with students. <br /> <br/>

     </Text>
   </CardBody>
      
       
         
 </Card>);

const Testimonial = () => {
  return (
    <Box  backgroundColor='brand.purpleOne'   width='100%'>
        <Flex direction='column'>
        <Box textAlign='center' pt={10} > 
      <Text color='brand.blackTwo'fontWeight='semibold' fontSize={18} >
      HAPPY CUSTOMERS
        </Text>    
        <Text pt={10} color='brand.blackOne' fontWeight='semibold' fontSize={35}>
        Don't take our word for it. See what <br/> <Box as='span' color='brand.blueOne'>Customers</Box> why our are saying about us.
        </Text>   
        </Box>
        </Flex>
        <Box pt={10} pb={10}>
            <Flex alignItems='center'  justifyContent='space-around' direction={{md:'column',lg:'row',sm:'column',base:'column'}} >

        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />


            </Flex>
</Box>
      
    </Box>
  )
}

export default Testimonial