import { Component } from "react";

type UserDetailsProps = {
    email: string;
};

type State = {
    isEmailVisible: boolean;
};

class UserDetails extends Component<UserDetailsProps, State> {
    state = {
        isEmailVisible: false,
    };

    toggleEmail = () =>
        this.setState(state => ({ isEmailVisible: !state.isEmailVisible }));

    render() {
        const { email } = this.props;
        const { isEmailVisible } = this.state;

        return (
            <>
                <button type="button" onClick={this.toggleEmail}>
                    👁️
                </button>
                {isEmailVisible && <> Email: {email}</>}
            </>
        );
    }
}

export default UserDetails;
