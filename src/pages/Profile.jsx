import { ChatIcon, EmailIcon, StarIcon, WarningIcon, CheckCircleIcon } from "@chakra-ui/icons";
import { List, ListIcon, ListItem, Tab, TabList, TabPanel, TabPanels, Tabs} from "@chakra-ui/react";

export default function Profile() {
  return (
    <Tabs mt='40px' p='20px' colorScheme='purple' variant='enclosed'>
      <TabList>
        <Tab _selected={{ color:'white', bg:'purple.400'}}>Account Info</Tab>
        <Tab _selected={{ color:'white', bg: 'purple.400'}}>Task history</Tab>
        <Tab _selected={{ color:'white', bg: 'purple.400'}}>Recents task</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <List>
            <ListItem>
              <ListIcon as={EmailIcon} />
              Email: abdul@codewithjameel.dev
            </ListItem>
            <ListItem>
              <ListIcon  as={ChatIcon}/>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, nobis
            </ListItem>
            <ListItem>
              <ListIcon as={StarIcon} />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A fuga at consectetur.
            </ListItem>
          </List>
        </TabPanel>
        <TabPanel>
          <List>            
            <ListItem>
              <ListIcon  as={CheckCircleIcon} color="teal.400"/>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, nobis
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} color="red.400" />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A fuga at consectetur.
            </ListItem>
          </List>
        </TabPanel>
        <TabPanel>
          <List>            
            <ListItem>
              <ListIcon  as={CheckCircleIcon} color="teal.400"/>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, nobis
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon}color="red.400" />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A fuga at consectetur.
            </ListItem>
          </List>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}
