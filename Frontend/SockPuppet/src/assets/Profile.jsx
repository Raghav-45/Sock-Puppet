import * as React from 'react'
import axios from 'axios'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import { Flex, Avatar, Box, Text, Badge } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'
import { useState } from 'react';
import { useEffect } from 'react';

function Profile() {
  const jsoo = {"results":[{"gender":"female","name":{"title":"Ms","first":"Alma","last":"Wilson"},"location":{"street":{"number":5554,"name":"W Pecan St"},"city":"Los Lunas","state":"Hawaii","country":"United States","postcode":76481,"coordinates":{"latitude":"49.1900","longitude":"118.9602"},"timezone":{"offset":"+5:30","description":"Bombay, Calcutta, Madras, New Delhi"}},"email":"alma.wilson@example.com","login":{"uuid":"0fbb8e83-bc32-47f4-b6ea-3f5801f5376a","username":"redfrog578","password":"\"U{i0AG`hTqj","salt":"WpkB0rpx","md5":"f691fc8c4d923d937fba36e8a88652ad","sha1":"0ba67bdd013436683c61815a7f88802745a1df85","sha256":"9a157243be417dfd30b628343f840263b36b781a1961bc09f6ebf67fcf901647"},"dob":{"date":"1965-01-18T23:42:36.207Z","age":57},"registered":{"date":"2005-10-11T09:51:41.636Z","age":16},"phone":"(406) 689-4000","cell":"(885) 368-2347","id":{"name":"SSN","value":"556-90-1209"},"picture":{"large":"https://randomuser.me/api/portraits/women/53.jpg","medium":"https://randomuser.me/api/portraits/med/women/53.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/53.jpg"},"nat":"US"}],"info":{"seed":"c5b7731c8f271cfb","results":1,"page":1,"version":"1.4"}}

  const [sockPuppetData, setSockPuppetData] = useState({})

  async function GenerateSockPuppet() {
    const g = await axios.get(`https://randomuser.me/api/?gender=&nat=us&password=upper,lower,number,special,8-12&format=json`)
    await setSockPuppetData(resp.data)
  }

  useEffect(() => {
    GenerateSockPuppet()
    const data = sockPuppetData.results[0]
  }, [])

  return (
    <ChakraProvider>
      {/* <Flex>
        <Avatar size='xl' src={data.picture.large} />
        <Box mt='auto' mb='auto' ml='3'>
          <Text fontWeight='bold'>
            {data.name.title + '. ' + data.name.first + ' ' + data.name.last}
            <Badge ml='1' colorScheme='green'>
              {data.gender}
            </Badge>
          </Text>
          <Text fontSize='sm'>{data.email}</Text>
        </Box>
      </Flex>
      <Text fontSize='sm'>state: {data.location.state}</Text>
      <Text fontSize='sm'>City: {data.location.city}</Text>
      <Text fontSize='sm'>Postal Code: {data.location.postcode}</Text>
      <Text fontSize='sm'>Country: {data.location.country}</Text>
      <Text fontSize='sm'>Formatted: {data.location.state}, {data.location.city}, {data.location.postcode}, {data.location.country}</Text> */}
    </ChakraProvider>
  )
}

export default Profile;