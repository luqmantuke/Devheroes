import React from 'react'
import {Box,Flex,Text,Card,CardHeader,Avatar,Heading,CardBody} from '@chakra-ui/react'

const TestimonialCard = ({avatarName,avatarImage,avatarStatus,testimonial}) => (<Card maxW='sm'  margin={2} >
         
   <CardHeader>
     <Flex spacing='4'>
       <Flex  flex='1' gap='4'  alignItems='center' flexWrap='wrap'>
         <Avatar name={avatarName} src={avatarImage} />
       
         <Box>
           <Heading size='sm'>{avatarName}</Heading>
           <Text>{avatarStatus}</Text>
         </Box>
       </Flex>
             
     </Flex>
   </CardHeader>
   <CardBody>
     <Text>
 {testimonial}

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

        <TestimonialCard avatarName='Frank Manyinyi' avatarImage='https://bit.ly/sage-adebayo' avatarStatus='Academic Master,Edmund Rice' testimonial='    We have been using the DevHeroes Timetable solution for the past few months at Edmund Rice Sinon Secondary School, and it has been a game-changer for us. The solution has significantly reduced the workload of our academic staff, enabling them to focus more on teaching and engaging with students. '  />
    
        <TestimonialCard avatarName='Frank Manyinyi' avatarImage='https://bit.ly/sage-adebayo' avatarStatus='Academic Master,Edmund Rice' testimonial='    We have been using the DevHeroes Timetable solution for the past few months at Edmund Rice Sinon Secondary School, and it has been a game-changer for us. The solution has significantly reduced the workload of our academic staff, enabling them to focus more on teaching and engaging with students. '  />   <TestimonialCard avatarName='Frank Manyinyi' avatarImage='https://bit.ly/sage-adebayo' avatarStatus='Academic Master,Edmund Rice' testimonial='    We have been using the DevHeroes Timetable solution for the past few months at Edmund Rice Sinon Secondary School, and it has been a game-changer for us. The solution has significantly reduced the workload of our academic staff, enabling them to focus more on teaching and engaging with students. '  />

            </Flex>
</Box>
      
    </Box>
  )
}

export default Testimonial