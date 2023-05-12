import React from 'react'
import {Box,Flex,Text} from '@chakra-ui/react'

const WhyUsFlex = ({number,title,description}) => (<Box>

<Flex pt={{md:'15',lg:'0',sm:'15',base:'15'}} pr={6} direction='row'>
<Text pr={3} color='brand.blueOne' fontWeight='semibold' fontSize={30}>{number}</Text>
<Flex  direction='column'>
<Text  color='brand.blackOne' fontWeight='semibold' fontSize={17}>
    {title}
</Text>
<Text pt={4} color='brand.blackTwo' fontWeight='medium'>
{description}

</Text>
</Flex>
</Flex>
    </Box>);

const WhyChooseUs = () => {
  return (
   <Box  backgroundColor='brand.whiteTwo' pb={40} width='100%' >

    
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
        <WhyUsFlex number='01' title='Timetable' description="Creating an effective and accurate timetable for schools is no easy feat. But with DevHeroes, you can simplify the process and achieve precision and ease." />
        <WhyUsFlex number='02' title='Planning' description="Creating an effective and accurate timetable for schools is no easy feat. But with DevHeroes, you can simplify the process and achieve precision and ease." />
        
        <WhyUsFlex number='03' title='Design&Development' description="Creating an effective and accurate timetable for schools is no easy feat. But with DevHeroes, you can simplify the process and achieve precision and ease." />
        </Flex>
    </Flex>

   </Box>
  )
}

export default WhyChooseUs