import React from 'react'
import {Box,Flex,Text,Heading,Image} from '@chakra-ui/react'
import { BannerOne } from '../../utilities/assetIndex'

const BannerApp = () => {
  return (
   <Box backgroundColor='brand.purpleOne' boxSize='container.md'  width='100%' pl={10} >
<Flex   alignItems={{md:'center',lg:'start',sm:'center',base:'center'}}direction={{md:'column',lg:'row',sm:'column',base:'column'}} >

    {/* First box to display banner text */}
    <Box flex={1} flexGrow={1} pt={20}>
      <Flex direction='column' >
        <Heading color='brand.blackOne' as='h1' fontSize={50}>Revolutionize<br /> school timetabling<br/> with DevHeroes.</Heading>
        <Text pt={7} color='brand.blackTwo' fontSize={20}>
        Say goodbye to manual timetabling and <br/> hello to efficiency and accuracy with our <br/>innovative technology.
        </Text>
      </Flex>
    </Box>

    {/* Second Box to display banner image */}
    <Box width={{md:'100%',sm:'100%',base:'100%'}}    flex={1} flexGrow={1}>
      <Image    src={BannerOne} />
    </Box>
</Flex>
   </Box>
  )
}

export default BannerApp