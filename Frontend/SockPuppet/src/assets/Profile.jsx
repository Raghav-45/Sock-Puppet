import * as React from 'react'
import axios from 'axios'
import addresses from './addresses_us.json'

// 1. import `ChakraProvider` component
import { ChakraProvider, space } from '@chakra-ui/react'
import { Flex, Avatar, Box, Text, Badge } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'

function Profile() {
  const jsoo = {"results":[{"gender":"female","name":{"title":"Ms","first":"Alma","last":"Wilson"},"location":{"street":{"number":5554,"name":"W Pecan St"},"city":"Los Lunas","state":"Hawaii","country":"United States","postcode":76481,"coordinates":{"latitude":"49.1900","longitude":"118.9602"},"timezone":{"offset":"+5:30","description":"Bombay, Calcutta, Madras, New Delhi"}},"email":"alma.wilson@example.com","login":{"uuid":"0fbb8e83-bc32-47f4-b6ea-3f5801f5376a","username":"redfrog578","password":"\"U{i0AG`hTqj","salt":"WpkB0rpx","md5":"f691fc8c4d923d937fba36e8a88652ad","sha1":"0ba67bdd013436683c61815a7f88802745a1df85","sha256":"9a157243be417dfd30b628343f840263b36b781a1961bc09f6ebf67fcf901647"},"dob":{"date":"1965-01-18T23:42:36.207Z","age":57},"registered":{"date":"2005-10-11T09:51:41.636Z","age":16},"phone":"(406) 689-4000","cell":"(885) 368-2347","id":{"name":"SSN","value":"556-90-1209"},"picture":{"large":"https://randomuser.me/api/portraits/women/53.jpg","medium":"https://randomuser.me/api/portraits/med/women/53.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/53.jpg"},"nat":"US"}],"info":{"seed":"c5b7731c8f271cfb","results":1,"page":1,"version":"1.4"}}

  const [sockPuppetData, setSockPuppetData] = useState({})
  const [gotData, setGotData] = useState(false)
  const { seed } = useParams()

  const GenerateSockPuppet = async () => {
    // const g = await axios.get('https://randomuser.me/api/?gender=male&nat=us&password=upper,lower,number,special,8-12&format=json')
    const g = await axios.get(`http://127.0.0.1:5000/seed/${seed}`)
    const data = await g.data[0]
    console.log(data[0])
    setSockPuppetData(data)
    setGotData(true)
  }

  const rAddr = async () => {
    const r = await axios.get(`http://127.0.0.1:5000/puppet/${seed}`)
    const data = await r.data[`${seed}`]
    console.log(data)
    setSockPuppetData(data)
    setGotData(true)
    // return(data)
  }

  useEffect(() => {
    // GenerateSockPuppet()
    rAddr()
  }, [])

  var dict = {
    "Armed Forces Americas": "AA",
    "Armed Forces Europe": "AE",
    "Alaska": "AK",
    "Alabama": "AL",
    "Armed Forces Pacific": "AP",
    "Arkansas": "AR",
    "American Somoa": "AS",
    "Arizona": "AZ",
    "California": "CA",
    "Colorado": "CO",
    "Connecticut": "CT",
    "District of Columbia": "DC",
    "Delaware": "DE",
    "Florida": "FL",
    "Federated States of Micronesia": "FM",
    "Georgia": "GA",
    "Guam": "GU",
    "Hawaii": "HI",
    "Iowa": "IA",
    "Idaho": "ID",
    "Illinois": "IL",
    "Indiana": "IN",
    "Kansas": "KS",
    "Kentucky": "KY",
    "Louisiana": "LA",
    "Massachusetts": "MA",
    "Maryland": "MD",
    "Maine": "ME",
    "Marshall Islands": "MH",
    "Michigan": "MI",
    "Minnesota": "MN",
    "Missouri": "MO",
    "Northern Mariana Islands": "MP",
    "Mississippi": "MS",
    "Montana": "MT",
    "North Carolina": "NC",
    "North Dakota": "ND",
    "Nebraska": "NE",
    "New Hampshire": "NH",
    "New Jersey": "NJ",
    "New Mexico": "NM",
    "Nevada": "NV",
    "New York": "NY",
    "Ohio": "OH",
    "Oklahoma": "OK",
    "Oregon": "OR",
    "Pennsylvania": "PA",
    "Puerto Rico": "PR",
    "Palau": "PW",
    "Rhode Island": "RI",
    "South Carolina": "SC",
    "South Dakota": "SD",
    "Tennessee": "TN",
    "Texas": "TX",
    "Utah": "UT",
    "Virginia": "VA",
    "Virgin Islands": "VI",
    "Vermont": "VT",
    "Washington": "WA",
    "Wisconsin": "WI",
    "West Virginia": "WV",
    "Wyoming": "WY"
  }

  // const randomAddress = addresses.addresses[Math.floor(Math.random() * addresses.addresses.length)]

  if (!gotData == true) {
    return 'loading...'
  } else {
  return (
    <ChakraProvider>
      {/* <Flex>
        <Avatar size='xl' src={sockPuppetData.picture.large} />
        <Box mt='auto' mb='auto' ml='3'>
          <Text fontWeight='bold'>
            {sockPuppetData.name.title + '. ' + sockPuppetData.name.first + ' ' + sockPuppetData.name.last}
            <Badge ml='1' colorScheme='green'>
              {sockPuppetData.gender}
            </Badge>
          </Text>
          <Text fontSize='sm'>{sockPuppetData.email}</Text>
        </Box>
      </Flex>
      <br/>
      <Text fontSize='sm'>City: {sockPuppetData.location.city}</Text>
      <Text fontSize='sm'>state: {sockPuppetData.location.state}</Text>
      <Text fontSize='sm'>Postal Code: {sockPuppetData.location.postcode}</Text>
      <Text fontSize='sm'>Country: {sockPuppetData.location.country}</Text>
      <br/>
      <Text fontSize='sm'>Latitude: {sockPuppetData.location.coordinates.latitude}</Text>
      <Text fontSize='sm'>Longitude: {sockPuppetData.location.coordinates.longitude}</Text>
      <br/>Formatted: 
      <Text fontSize='sm'>{jsoo.results[0].location.street.number} {jsoo.results[0].location.street.name} <br/> {sockPuppetData.location.city}, {dict[sockPuppetData.location.state]} {sockPuppetData.location.postcode}</Text>
      {sockPuppetData.location.country} */}

      <br/><br/>Random: 
      {/* <Text fontSize='sm'>{sockPuppetData.address1}<br/> {sockPuppetData.city}, {sockPuppetData.state} {sockPuppetData.postalCode}</Text> */}
      {/* <pre>{sockPuppetData.city}</pre> */}
      <br/><br/>All Data: 
      <pre>{JSON.stringify(sockPuppetData)}</pre>
    </ChakraProvider>
  )
}
}

export default Profile;