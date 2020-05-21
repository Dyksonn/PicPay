import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient'

export const Wrapper = styled.View`
    background: #000;
    flex: 1;
`;

export const Header = styled(LinearGradient)`
    height: 300px;
`;

export const HeaderContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    color: #FFF;
    font-size: 16px;
    font-weight: bold;
`;

export const BalanceContainer = styled.View`
    margin: 10px 0;
    flex-direction: row;
    align-items: center;
`;

export const Value = styled.Text`
    color: #FFF;
    font-size: 38px;
    font-weight: 200;
`;

export const Bold = styled.Text`
    font-weight: bold;
`;

export const EyeButton = styled.TouchableOpacity`
    margin-left: 10px;
`;

export const Info = styled.Text`
    color: #fff;
    font-size: 14px;
`;

export const Actions = styled.View`
    flex-direction: row;
    margin-top: 40px;
`;

export const Action = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(255, 255, 255, 0.6);
    width: 150px;
    height: 45px;
    border-radius: 25px;
    margin: 0 10px;
`;

export const ActionLabel = styled.Text`
    font-size: 16px;
    color: #FFF;
    margin-left: 10px;
`;

export const UseBalance = styled.View`
    background: #c5c5c5;
    height: 50px;
    flex-direction: row;
    padding: 0 16px;
    align-items: center;
    justify-content: space-between;
`;

export const UseBalanceTitle = styled.Text`
    color: #FFF;
    font-size: 16px;
    font-weight: 500;
`;

export const Switch = styled.Switch.attrs(() => ({
    trackColor: {
        false: 'red',
        true: 'green'
    }
}))``;

export const PaymentMethods = styled.View`
    margin-top: 25px;
    padding: 0 16px;
`;

export const PaymentMethodsTitle = styled.Text`
    color: #8E8e93;
    text-transform: uppercase;
`;

export const Card = styled.View`
    background: #1E232A;
    padding: 20px;
    border-radius: 8px;
    margin-top: 10px;
`;

export const CardDetails = styled.View``;

export const CardTitle = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #FFF;
`;

export const CardInfo = styled.Text`
    font-size: 16px;
    color: rgba(255, 255, 255, 0.8);
    margin-top: 15px;
`;

