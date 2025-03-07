"use client" 

import { AppShell, Badge, Burger, Card, CardSection, Flex, NavLink, Select, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function App() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          size="sm"
        />
        <div>SSM</div>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <NavLink
            href="#required-for-focus"
            label="Dashboard"
            // leftSection={<IconHome2 size={16} stroke={1.5} />}
        />
        <NavLink
            href="#required-for-focus"
            label="Create Content"
            // leftSection={<IconHome2 size={16} stroke={1.5} />}
        />
        <NavLink
            href="#required-for-focus"
            label="Content Planner"
            // leftSection={<IconHome2 size={16} stroke={1.5} />}
        />
        <NavLink
            href="#required-for-focus"
            label="Insights"
            // leftSection={<IconHome2 size={16} stroke={1.5} />}
        />
        <NavLink
            href="#required-for-focus"
            label="Settings"
            // leftSection={<IconHome2 size={16} stroke={1.5} />}
        />
        <NavLink
            href="#required-for-focus"
            label="Help Center"
            // leftSection={<IconHome2 size={16} stroke={1.5} />}
        />
        <NavLink
            href="#required-for-focus"
            label="Logout"
            // leftSection={<IconHome2 size={16} stroke={1.5} />}
        />
      </AppShell.Navbar>

      <AppShell.Main>
        <Flex
            direction="column"
        >
            <Flex
                gap={"lg"}
            >
                <Card bg="#ebebeb" p={"15px"} w={"25%"}>
                    <CardSection bg="#fff" p="3px">
                        <Flex
                            justify="space-between"
                            gap="lg"
                            align="center"
                        >
                            <Flex
                                direction="column"
                            >
                                <Text>Subscribers</Text>
                                <Flex>
                                    <Text>720.07K</Text>
                                    {/* <Badge>+10%</Badge> */}
                                </Flex>
                            </Flex>
                            <img src='/icons/youtube.png' style={{ width: "30px", height: "30px", objectFit: "cover" }} />
                        </Flex>
                    </CardSection>
                    here
                </Card>

                <Card bg="#ebebeb" p={"15px"} w={"25%"}>
                    <CardSection bg="#fff" p="3px">
                        <Flex
                            justify="space-between"
                            gap="lg"
                            align="center"
                        >
                            <Flex
                                direction="column"
                            >
                                <Text>Subscribers</Text>
                                <Flex>
                                    <Text>720.07K</Text>
                                    {/* <Badge>+10%</Badge> */}
                                </Flex>
                            </Flex>
                            <img src='/icons/instagram.png' style={{ width: "30px", height: "30px", objectFit: "cover" }} />
                        </Flex>
                    </CardSection>
                </Card>

                <Card bg="#ebebeb" p={"15px"} w={"25%"}>
                    <CardSection bg="#fff" p="3px">
                        <Flex
                            justify="space-between"
                            gap="lg"
                            align="center"
                        >
                            <Flex
                                direction="column"
                            >
                                <Text>Subscribers</Text>
                                <Flex>
                                    <Text>720.07K</Text>
                                    {/* <Badge>+10%</Badge> */}
                                </Flex>
                            </Flex>
                            <img src='/icons/facebook.png' style={{ width: "30px", height: "30px", objectFit: "cover" }} />
                        </Flex>
                    </CardSection>
                </Card>

                <Card bg="#ebebeb" p={"15px"} w={"25%"}>
                    <CardSection bg="#fff" p="3px">
                        <Flex
                            justify="space-between"
                            gap="lg"
                            align="center"
                        >
                            <Flex
                                direction="column"
                            >
                                <Text>Subscribers</Text>
                                <Flex>
                                    <Text>720.07K</Text>
                                    {/* <Badge>+10%</Badge> */}
                                </Flex>
                            </Flex>
                            <img src='/icons/twitter.png' style={{ width: "30px", height: "30px", objectFit: "cover" }} />
                        </Flex>
                    </CardSection>
                </Card>
            </Flex>

            <Flex>
                <Card w={"75%"}>
                    <Text>Revenue</Text>
                    <Flex
                        justify="space-between"
                    >
                        <Flex>
                            <Text>720.07K</Text>
                            {/* <Badge>+10%</Badge> */}
                        </Flex>
                        <Select></Select>
                    </Flex>
                    Chart
                </Card>

                <Card w={"25%"}>
                    <Text>Followers</Text>
                    <Flex
                        justify="space-between"
                    >
                        <Flex>
                            <Text>720.07K</Text>
                            {/* <Badge>+10%</Badge> */}
                        </Flex>
                        <Select></Select>
                    </Flex>
                    progress
                </Card>
            </Flex>
            
            <Flex>
                <Flex 
                    w={"75%"}
                    direction="column"
                >
                    <Card>
                        <Flex justify="space-between">
                            <Text>Post Schedule</Text>
                            <Select></Select>
                        </Flex>
                        Dates
                    </Card>
                    <Card>
                        <Text>02:00 PM</Text>
                    </Card>
                </Flex>
                <Card w={"25%"}>Post Insights</Card>
            </Flex>
        </Flex>
      </AppShell.Main>
    </AppShell>
  );
}

export default App;