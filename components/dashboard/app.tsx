"use client" 

import { AppShell, Badge, Burger, Card, CardSection, Flex, NavLink, Progress, Select, Table, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Followers from '../../components/dashboard/Followers';
import PostInsights from '../../components/dashboard/PostInsights';
import Schedule from '../../components/dashboard/Schedule';

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
        followerData,
        insights
    } : 
    { 
        mediaData : MediaData[], 
        followerData: any,
        insights: any
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
            <Flex
                direction="column"
                gap="xl"
                p="xl"
                m="xl"
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

                <Flex gap="xl">
                    <Card w={"70%"} radius="lg" withBorder shadow='lg'>
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

                    <Followers locationData={locationData} />
                </Flex>
                
                <Flex gap="xl">
                    <Schedule />

                    <PostInsights insights={insights} />
                </Flex>
            </Flex>

    );
}

export default App;