import { Card, Flex, Progress, Select, Text } from "@mantine/core"

const Followers = ( { locationData } : { locationData: any }) => {
    return (        
        <Card w={"30%"} shadow="md" withBorder p="xl" radius="lg">
            <Text>Followers</Text>
            <Flex
                justify="space-between"
                gap="xl"
            >
                <Flex>
                    <Text size='xl' fw={600}>720.07K</Text>
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
    )
}

export default Followers;