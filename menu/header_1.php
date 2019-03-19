<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();?>
<?
global $arTheme, $arRegion;
$arRegions = CNextRegionality::getRegions();
if($arRegion)
	$bPhone = ($arRegion['PHONES'] ? true : false);
else
	$bPhone = ((int)$arTheme['HEADER_PHONES'] ? true : false);
$logoClass = ($arTheme['COLORED_LOGO']['VALUE'] !== 'Y' ? '' : ' colored');
?>
<div class="top-block top-block-v1">
	<div class="maxwidth-theme">		
		<div class="wrapp_block">
			<div class="row top-block_row">
				<div class="top-block-item">
					<button class="user-location">Санкт-Перербург</button>
				</div>
				<div class="top-block-item">
					<a href="#" class="allshops">Адреса магазинов</a>
				</div>
				<div class="top-block-item">
					<ul class="top-block_menu">
						<li class="menu_item"><a href="#" class="menu_link">Контакты</a></li>
						<li class="menu_item"><a href="#" class="menu_link">О компании</a></li>
						<li class="menu_item"><a href="#" class="menu_link">Бонусная программа</a></li>
					</ul>
				</div>
				<?if($arRegions):?>
					<div class="top-block-item col-md-2">
						<div class="top-description">
							<?$APPLICATION->IncludeComponent("bitrix:main.include", ".default",
								array(
									"COMPONENT_TEMPLATE" => ".default",
									"PATH" => SITE_DIR."include/top_page/regionality.list.php",
									"AREA_FILE_SHOW" => "file",
									"AREA_FILE_SUFFIX" => "",
									"AREA_FILE_RECURSIVE" => "Y",
									"EDIT_TEMPLATE" => "include_area.php"
								),
								false
							);?>
						</div>
					</div>
				<?else:?>
					<div class="top-block-item col-md-4 phone-info">
						<div class="phone-block">
							<?if($bPhone):?>
								<div class="inline-block">
									<?CNext::ShowHeaderPhones();?>
								</div>
							<?endif?>
							<?if($arTheme['SHOW_CALLBACK']['VALUE'] == 'Y'):?>
								<div class="inline-block">
									<span class="callback-block animate-load twosmallfont colored" data-event="jqm" data-param-form_id="CALLBACK" data-name="callback"><?=GetMessage("CALLBACK")?></span>
								</div>
							<?endif;?>
						</div>
					</div>
				<?endif;?>
			</div>
		</div>
	</div>
</div>
<div class="header-wrapper topmenu-LIGHT">
	
		<div class="logo_and_menu-row">
			<div class="wrapper_inner">
				<div class="logo-row row">
					<div class="logo-block col-md-2 col-sm-3">
						<div class="logo<?=$logoClass?>">
							<?=CNext::ShowLogo();?>
						</div>
					</div>
					<div class="menu-static">
						<ul class="menu-static_list">
							<li class="menu-static_item discounts"><a href="#" class="menu-static_link">Скидки</a></li>
							<li class="menu-static_item"><a href="#" class="menu-static_link">Акции</a></li>
							<li class="menu-static_item"><a href="#" class="menu-static_link">Доставка и оплата</a></li>
							<li class="menu-static_item"><a href="#" class="menu-static_link">Услуги</a></li>
						</ul>
					</div>
					<div class="control">
						<div class="top-block-item show-fixed top-ctrl">
							<div class="personal_wrap">
								<div class="personal top login">
									<?=CNext::ShowCabinetLink(true, true);?>
								</div>
							</div>
						</div>
						<div class="top-block-item show-fixed top-ctrl">
							<div class="basket_wrap">
								<?CNext::ShowBasketWithCompareLink('', '');?>
							</div>
						</div>
					</div>
				</div>
			</div><?// class=logo-row?>
			
			<div class="js-header-fixed-wrap">
			<div class="js-header-fixed">
				<div class="maxwidth-theme">

				<div class="row menu-row">
						<div class="nav-main-collapse collapse in">
							<div class="menu-only">
								<nav class="mega-menu sliced">
									<?$APPLICATION->IncludeComponent("bitrix:main.include", ".default",
										array(
											"COMPONENT_TEMPLATE" => ".default",
											"PATH" => SITE_DIR."include/menu/menu.top.php",
											"AREA_FILE_SHOW" => "file",
											"AREA_FILE_SUFFIX" => "",
											"AREA_FILE_RECURSIVE" => "Y",
											"EDIT_TEMPLATE" => "include_area.php"
										),
										false, array("HIDE_ICONS" => "Y")
									);?>
								</nav>
							</div>
						</div>
					</div>
				</div>

				</div>					
			</div>
			</div>
	
	<div class="line-row visible-xs"></div>
</div>