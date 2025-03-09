"use client" 

import { AppShell, Badge, Burger, Card, CardSection, Flex, NavLink, Progress, Select, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

interface MediaData {
    media: string,
    views: string,
    percent: string,
    logo: string,
    more: string
};

function App(
    { 
        mediaData, 
        followerData 
    } : 
    { 
        mediaData : MediaData[], 
        followerData: any 
    }) {
  const [opened, { toggle }] = useDisclosure();

  const Sum = (total: number, num: number) => {
    return total + num;
    }

    let locationData = Object.values(followerData.location)
    const sum = locationData.map((a: any) => a.views).reduce(Sum, 0);

    const colors = ["red", "green", "blue", "orange", "purple", "yellow", "pink", "cyan", "lime", "teal"];

    function shuffleArray(array: any) {
        return array.sort(() => Math.random() - 0.5);
    }
    
    const shuffledColors = shuffleArray(colors).slice(0, locationData.length);
    
    locationData = locationData.map((item: any, index) => ({
        ...item,
        color: shuffledColors[index],
        value: Math.round((item.views / sum) * 100) * 2
    }));

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
            gap="xl"
        >
            <Flex
                gap={"lg"}
            >
                {mediaData.map(media => (
                    <Card bg="#ebebeb" p="sm" w={"25%"} radius="lg" shadow='sm' withBorder>
                        <Card bg="#fff" p="md" radius="lg">
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
                                        <Text>{media.views}</Text>
                                        {/* <Badge>{media.percent}</Badge> */}
                                    </Flex>
                                </Flex>
                                <img src={`/icons/${media.logo}`} style={{ width: "30px", height: "30px", objectFit: "cover" }} />
                            </Flex>
                        </Card>
                        <Text>{media.more}</Text>
                    </Card>
                ))}
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

                <Card w={"25%"} shadow="md" withBorder p="xl" radius="lg">
                    <Text>Followers</Text>
                    <Flex
                        justify="space-between"
                        gap="xl"
                    >
                        <Flex>
                            <Text size='xl'>720.07K</Text>
                        </Flex>
                        <Select w={"50%"}></Select>
                    </Flex>
                    {locationData.map((c: any) => (
                        <>
                            <Flex justify="space-between">
                                <Text>{c.name}</Text>
                                <Text>{c.views.toLocaleString()}</Text>
                            </Flex>
                            <Progress value={c.value} mb={"lg"} striped animated size={"md"} color={c.color}></Progress>
                        </>
                    ))}
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