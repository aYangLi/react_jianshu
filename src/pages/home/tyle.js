/**
 * @Desc:
 * @Usage:
 * @Notify:
 * @depend:
 *
 *
 * Created by aYang on 2019-04-17
 */
import styled from 'styled-components';

export const HomeWrapper = styled.div`
	width: 960px;
	margin: 0 auto;
	overflow: hidden;
`;
export const HomeLeft = styled.div`
	width: 625px;
	margin-left: 15px;
	padding-top: 30px;
	float: left;
	.banner-img{
		width: 625px;
		height: 270px;
	}
`;
export const HomeRight = styled.div`
	width: 280px;
	float: right;
	
`;

export const TopicWrapper = styled.div`
	overflow: hidden;
	padding: 20px 0 10px 0;
	margin-left: -18px;
	border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
	float: left;
	background: #f7f7f7;
	margin-left: 18px;
	margin-bottom: 18px;
	height: 32px;
	line-height: 32px;
	font-size: 14px;
	color: #000;
	border: 1px solid #dcdcdc;
	border-radius: 4px;
	padding-right: 10px;
	.topic-pic{
		display: block;
		float: left;
		width: 32px;
		height: 32px;
		margin-right: 10px;
	}
`;

export const ListItem = styled.div`
	padding: 20px 0;
	border-bottom: 1px solid #dcdcdc;
	overflow: hidden;
	.list-pic{
		width: 125px;
		height: 100px;
		display: block;
		float: right;
		border-radius: 5px;
	}
`;

export const ListInfo = styled.div`
	width: 500px;
	float: left;
	.title{
		font-size: 18px;
		line-height: 27px;
		color: #333;
	}
	.desc{
		line-height: 24px;
		font-size: 13px;
		color: #999;
	}
`;

export const RecommendWrap = styled.div`
	margin: 30px 0;
	width: 280px;
`;

export const RecommendItem = styled.div`
	width: 280px;
	height: 50px;
	background: url(${props => props.imgUrl});
	background-size: contain;
`;

export const WriterWrapper = styled.div`
	width: 100%;
	border: 1px solid #ececec;
	border-radius: 3px;
	height: 300px;
	line-height: 300px;
	text-align: center;
`;