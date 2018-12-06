<template>
	<div class="shoplist_container">
		<ul>
	        <li class="shop_li">
				<section>
					<img class="shop_img"/>
	        	</section>
				<hgroup class="shop_right">
					<header class="shop_detail_header">
						<h4 class="premium shop_title">泡面小食堂</h4>
						<ul class="shop_detail_ul">
							<li class="supports">
								保
							</li>
							<li class="supports">
								准
							</li>
							<li class="supports">
								票
							</li>
						</ul>
					</header>
					<h5 class="rating_order_num">
						<section class="rating_order_num_left">
							<section class="rating_section">
								<span class="rating_num">4.5</span>
							</section>
						</section>
					</h5>
				</hgroup>
			</li>
		</ul>
        <ul>
            <li class="list_back_li" v-for="i in 10" :key="i">
                <img src="../../assets/shopback.svg" class="list_back_svg">
            </li>
        </ul>
    </div>
</template>
<script>
	
</script>
<style lang="scss" scoped>
    @import 'src/style/mixin';
    .shoplist_container {
        background-color: #fff;
        margin-bottom: 2em;
        .shop_li {
            display: flex;
            border-bottom: 0.025em solid #f1f1f1;
            padding: 0.7em 0.4em;
            .shop_img {
                @include wh(2.7em, 2.7em);
                display: block;
                margin-right: 0.4em;
            }
            .shop_right {
                flex: auto;
                .shop_detail_header {
                    @include fj;
                    align-items: center;
                    .shop_title {
                        width: 8.5em;
                        color: #333;
                        padding-top: .01em;
                        @include font(0.65em, 0.65em, 'PingFangSC-Regular');
                        font-weight: 700;
                    }
                    .premium::before{
                        content: '品牌';
                        display: inline-block;
                        font-size: 0.5em;
                        line-height: .6em;
                        color: #333;
                        background-color: #ffd930;
                        padding: 0.2em;
                        border-radius: 0.1em;
                        margin-right: 0.2em;
                    }
                    .shop_detail_ul {
                        display: flex;
                        transform: scale(.8);
                        margin-right: -0.3em;
                        .supports {
                            @include sc(0.5em, #999);
                            border: 0.025em solid #f1f1f1;
                            padding: 0 0.04em;
                            border-radius: 0.08em;
                            margin-left: 0.05em;
                        }
                    }
                    .rating_order_num {
                        @include fj(space-between);
                        height: 0.5em;
                        margin-top: 0.52em;
                        
                    }
                }
            }
        }
        .list_back_li {
            height: 4.85em;
            .list_back_svg {
                @include wh(100%, 100%)
            }
        }
    }
</style>