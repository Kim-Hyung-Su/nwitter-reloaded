import { styled } from "styled-components";
import PostTweetFrom from "../components/post-tweet-from";
import Timeline from "../components/timeline";

//
const Wrapper = styled.div`
    display: grid;
    gap: 50px;
    overflow-y: scroll;
    scrollbar-width: none;
    grid-template-rows: 1fr 5fr;
`

export default function Home() {
    return (
    <Wrapper>
        <PostTweetFrom />
        <Timeline />
    </Wrapper>
    )
}