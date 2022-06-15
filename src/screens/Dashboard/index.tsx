import React from 'react';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { HightLightCard } from '../../../components/HightLightCard';
import { TransactionCard } from '../../../components/TransactionCard';

import {
    Cantainer,
    Header,
    UserWrapper,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    Icon,
    HightLightCards,
    Transactions,
    Title,
    TransactionList
} from './styles'

export function Dashboard() {
    const data = [{
        title: "Desenvolvimento de site",
        amount: "R$ 12.000,00",
        category: {
            name: 'Vendas',
            icon: 'dollar-sign'
        },
        date: "13/06/2022"
    },
    {
        title: "Desenvolvimento de site",
        amount: "R$ 12.000,00",
        category: {
            name: 'Vendas',
            icon: 'dollar-sign'
        },
        date: "13/06/2022"
    },
    {
        title: "Desenvolvimento de site",
        amount: "R$ 12.000,00",
        category: {
            name: 'Vendas',
            icon: 'dollar-sign'
        },
        date: "13/06/2022"
    },
    ];
  // showsVerticalScrollIndicator={false} retira a barra lateral vertical
    return (
        <Cantainer>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/40746979?v=4' }} />
                        <User>
                            <UserGreeting>Olá,</UserGreeting>
                            <UserName>Ferreira</UserName>
                        </User>
                    </UserInfo>
                    <Icon name="power" />
                </UserWrapper>
            </Header>

            <HightLightCards>
                <HightLightCard
                    type='up'
                    title='Entrada'
                    amount='R$ 17.400,00'
                    lastTrasaction='Última transação 13 de abril'
                />
                <HightLightCard
                    type='down'
                    title='Saídas'
                    amount='R$ 1.259,00'
                    lastTrasaction='Última saída 03 de abril'
                />
                <HightLightCard title='Total'
                    type='total'
                    amount='R$ 16.141,00'
                    lastTrasaction='01 à 16 de abril' />
            </HightLightCards>

            <Transactions>
                <Title>Listagem</Title>
               
                <TransactionList
                    data={data}
                    renderItem={({ item }) => <TransactionCard data={item} />}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingBottom: getBottomSpace()
                    }}
                />

            </Transactions>
        </Cantainer>
    );
}