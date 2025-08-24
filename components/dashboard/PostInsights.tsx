import { Card, Flex, Progress, Table, Text } from "@mantine/core";

const PostInsights = ({ insights } : { insights: any }) => {
    return (        
        <Card w={"30%"} radius="lg" withBorder shadow='lg'>
            <Text size='xl' fw={600}>Post Insights</Text>
            <Text size='sm'>Published on Jan 18,2025 - 10:00 A.M</Text>

            {/* <hr /> */}

            <Table>
                {insights.map((i: any) => {
                    const color = i.active.startsWith("-") ? "red" : "green";

                    return (
                        <Table.Tr>
                            <Table.Td>
                                <Flex direction="column" justify="flex-end">
                                    <Text>{i.name}</Text>
                                    <Text fw={700}>{i.val}</Text>
                                </Flex>
                            </Table.Td>

                            <Table.Td>
                                <Flex direction="column">
                                    <Text>Average</Text>
                                    <Text>{i.av}%</Text>                                            </Flex>
                            </Table.Td>

                            <Table.Td>
                                <Flex direction="column" align="flex-start">
                                    <Text>Active Post</Text>
                                    <Text c={color}>{i.active}</Text>
                                </Flex>
                            </Table.Td>
                        </Table.Tr>
                    )
                })}
            </Table>

            <Table withColumnBorders withRowBorders={false}>
                <Table.Tr>
                    <Table.Td>
                        <Flex direction="column">
                            <Text>Desktop</Text>
                            <Text size='xl' fw={700}>18%</Text>
                        </Flex>
                    </Table.Td>

                    <Table.Td>
                        <Flex direction="column">
                            <Text>Tablet</Text>
                            <Text size='xl' fw={700}>06%</Text>                                       </Flex>
                    </Table.Td>

                    <Table.Td>
                        <Flex direction="column">
                            <Text>Mobile</Text>
                            <Text size='xl' fw={700}>76%</Text>
                        </Flex>
                    </Table.Td>
                </Table.Tr>

                <Table.Tr>
                    <Table.Td w={"33%"}>
                        <Flex direction="column">
                            <Text>-3.2%</Text>
                            <Progress color='blue' value={100}></Progress>
                        </Flex>
                    </Table.Td>

                    <Table.Td w={"33%"}>
                        <Flex direction="column">
                            <Text>-5.8%</Text>
                            <Progress color='green' value={100}></Progress>                                    </Flex>
                    </Table.Td>

                    <Table.Td w={"33%"}>
                        <Flex direction="column">
                            <Text>+12.3%</Text>
                            <Progress color='red' value={100}></Progress>
                        </Flex>
                    </Table.Td>
                </Table.Tr>
            </Table>
        </Card>
    )
}

export default PostInsights;