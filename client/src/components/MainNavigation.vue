<template>
    <!--MAIN NAVIGATION-->
    <!--===================================================-->
    <nav id="mainnav-container">
        <div id="mainnav">

            <!--Menu-->
            <!--================================-->
            <div id="mainnav-menu-wrap">
                <div class="nano">
                    <div class="nano-content">

                                                        <!--Profile Widget-->
                        <!--================================-->
                        <div id="mainnav-profile" class="mainnav-profile">
                            <div class="profile-wrap text-center">
                                <div class="pad-btm">
                                    <img class="img-circle img-md" src="static/img/profile-photos/1.png" alt="Profile Picture">
                                </div>
                                <a href="#profile-nav" class="box-block" data-toggle="collapse" aria-expanded="false">
                                    <span class="pull-right dropdown-toggle">
                                        <i class="dropdown-caret"></i>
                                    </span>
                                    <p class="mnp-name">Aaron Chavez</p>
                                    <span class="mnp-desc">aaron.cha@themeon.net</span>
                                </a>
                            </div>
                            <div id="profile-nav" class="collapse list-group bg-trans">
                                <a href="#" class="list-group-item">
                                    <i class="pli-male icon-lg icon-fw"></i> View Profile
                                </a>
                                <a href="#" class="list-group-item">
                                    <i class="pli-gear icon-lg icon-fw"></i> Settings
                                </a>
                                <a href="#" class="list-group-item">
                                    <i class="pli-information icon-lg icon-fw"></i> Help
                                </a>
                                <a href="#" class="list-group-item">
                                    <i class="pli-unlock icon-lg icon-fw"></i> Logout
                                </a>
                            </div>
                        </div>


                        <!--Shortcut buttons-->
                        <!--================================-->
                        <div id="mainnav-shortcut">
                            <ul class="list-unstyled shortcut-wrap">
                                <li class="col-xs-3" data-content="My Profile">
                                    <a class="shortcut-grid" href="#">
                                        <div class="icon-wrap icon-wrap-sm icon-circle bg-trans-dark">
                                        <i class="psi-male"></i>
                                        </div>
                                    </a>
                                </li>
                                <li class="col-xs-3" data-content="Messages">
                                    <a class="shortcut-grid" href="#">
                                        <div class="icon-wrap icon-wrap-sm icon-circle bg-trans-dark">
                                        <i class="psi-speech-bubble-3"></i>
                                        </div>
                                    </a>
                                </li>
                                <li class="col-xs-3" data-content="Activity">
                                    <a class="shortcut-grid" href="#">
                                        <div class="icon-wrap icon-wrap-sm icon-circle bg-trans-dark">
                                        <i class="psi-thunder"></i>
                                        </div>
                                    </a>
                                </li>
                                <li class="col-xs-3" data-content="Lock Screen">
                                    <a class="shortcut-grid" href="#">
                                        <div class="icon-wrap icon-wrap-sm icon-circle bg-trans-dark">
                                        <i class="psi-lock-2"></i>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <!--================================-->
                        <!--End shortcut buttons-->

                        <ul id="mainnav-menu" class="list-group">
                
                            <!--Category name-->
                            <li class="list-header">Link List</li>
                
                            <!--Menu list item-->
                            <li class="active-link">
                                <a href="#">
                                    <i class="psi-quill-2"></i>
                                    <span class="menu-title">Active state</span>
                                </a>
                            </li>
                
                            <!--Menu list item-->
                            <li>
                                <a href="#">
                                    <i class="psi-mail-love"></i>
                                    <span class="menu-title">
                                        <strong>Bolder</strong>
                                    </span>
                                </a>
                            </li>
                
                            <!--Menu list item-->
                            <li>
                                <a href="#">
                                    <i class="psi-gamepad-2"></i>
                                    <span class="menu-title">
                                        With label
                                        <span class="label label-success pull-right">New</span>
                                    </span>
                                </a>
                            </li>
                
                            <!--Menu list item-->
                            <li>
                                <a href="#">
                                    <i class="psi-usb"></i>
                                    <span class="menu-title">
                                        <router-link :to="'form'">Formulário</router-link>
                                        <span class="pull-right badge badge-purple">7</span>
                                    </span>
                                </a>
                            </li>
                
                            <li class="list-divider"></li>
                
                            <!--Category name-->
                            <li class="list-header">Submenus</li>
                
                            <!--Menu list item-->
                            <li class="active-sub">
                                <a href="#">
                                    <i class="psi-mouse-3"></i>
                                    <span class="menu-title">Active State</span>
                                    <i class="arrow"></i>
                                </a>
                
                                <!--Submenu-->
                                <ul class="collapse in">
                                    <li><a href="#">Link</a></li>
                                    <li class="active-link"><a href="#">Active link</a></li>
                                    <li><a href="#">Another link</a></li>
                                    <li><a href="#">Some else here</a></li>
                                    <li class="list-divider"></li>
                                    <li><a href="#">Separate link</a></li>
                                    
                                </ul>
                            </li>
                
                            <!--Menu list item-->
                            <li>
                                <a href="#">
                                    <i class="psi-hipster-headphones"></i>
                                    <span class="menu-title">
                                        <strong>Bolder</strong>
                                    </span>
                                    <i class="arrow"></i>
                                </a>
                
                                <!--Submenu-->
                                <ul class="collapse">
                                    <li><a href="#">Link</a></li>
                                    <li><a href="#">Another link</a></li>
                                    <li><a href="#">Some else here</a></li>
                                    <li class="list-divider"></li>
                                    <li><a href="#">Separate link</a></li>
                                    
                                </ul>
                            </li>
                
                            <!--Menu list item-->
                            <li>
                                <a href="#">
                                    <i class="psi-fuel"></i>
                                    <span class="menu-title">
                                        With label
                                        <span class="label label-danger pull-right">Hot</span>
                                    </span>
                                </a>
                
                                <!--Submenu-->
                                <ul class="collapse">
                                    <li><a href="#">Link</a></li>
                                    <li><a href="#">Another link</a></li>
                                    <li><a href="#">Some else here</a></li>
                                    <li class="list-divider"></li>
                                    <li><a href="#">Separate link</a></li>
                                    
                                </ul>
                            </li>
                
                            <!--Menu list item-->
                            <li>
                                <a href="#">
                                    <i class="psi-cursor-click"></i>
                                    <span class="menu-title">
                                        With badge
                                        <span class="pull-right badge badge-success">3</span>
                                    </span>
                                </a>
                
                                <!--Submenu-->
                                <ul class="collapse">
                                    <li><a href="#">Link</a></li>
                                    <li><a href="#">Another link</a></li>
                                    <li><a href="#">Some else here</a></li>
                                    <li class="list-divider"></li>
                                    <li><a href="#">Separate link</a></li>
                                    
                                </ul>
                            </li>
                
                            <li class="list-divider"></li>
                
                            <!--Category name-->
                            <li class="list-header">Multi level</li>

                            <!--Menu list item-->
                            <li>
                                <a href="#">
                                    <i class="psi-geo-2-star"></i>
                                    <span class="menu-title">Menu Level</span>
                                    <i class="arrow"></i>
                                </a>

                                <!--Submenu-->
                                <ul class="collapse">
                                    <li><a href="#">Second Level Item</a></li>
                                    <li><a href="#">Second Level Item</a></li>
                                    <li><a href="#">Second Level Item</a></li>
                                    <li class="list-divider"></li>
                                    <li>
                                        <a href="#">Third Level<i class="arrow"></i></a>

                                        <!--Submenu-->
                                        <ul class="collapse">
                                            <li><a href="#">Third Level Item</a></li>
                                            <li><a href="#">Third Level Item</a></li>
                                            <li><a href="#">Third Level Item</a></li>
                                            <li><a href="#">Third Level Item</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Third Level<i class="arrow"></i></a>

                                        <!--Submenu-->
                                        <ul class="collapse">
                                            <li><a href="#">Third Level Item</a></li>
                                            <li><a href="#">Third Level Item</a></li>
                                            <li><a href="#">Third Level Item</a></li>
                                            <li class="list-divider"></li>
                                            <li><a href="#">Third Level Item</a></li>
                                            <li><a href="#">Third Level Item</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>

                        </ul>


                        <!--Widget-->
                        <!--================================-->
                        <div class="mainnav-widget">

                            <!-- Show the button on collapsed navigation -->
                            <div class="show-small">
                                <a href="#" data-toggle="menu-widget" data-target="#demo-wg-server">
                                    <i class="fa fa-desktop"></i>
                                </a>
                            </div>

                            <!-- Hide the content on collapsed navigation -->
                            <div id="demo-wg-server" class="hide-small mainnav-widget-content">
                                <ul class="list-group">
                                    <li class="list-header pad-no pad-ver">Simple Widget</li>
                                    <li class="mar-btm">
                                        <span class="label label-primary pull-right">15%</span>
                                        <p>CPU Usage</p>
                                        <div class="progress progress-sm">
                                            <div class="progress-bar progress-bar-primary" style="width: 15%;">
                                                <span class="sr-only">15%</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="mar-btm">
                                        <span class="label label-purple pull-right">75%</span>
                                        <p>Bandwidth</p>
                                        <div class="progress progress-sm">
                                            <div class="progress-bar progress-bar-purple" style="width: 75%;">
                                                <span class="sr-only">75%</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="pad-ver"><a href="#" class="btn btn-success btn-bock">View Details</a></li>
                                </ul>
                            </div>
                        </div>
                        <!--================================-->
                        <!--End widget-->

                    </div>
                </div>
            </div>
            <!--================================-->
            <!--End menu-->

        </div>
    </nav>
    <!--===================================================-->
    <!--END MAIN NAVIGATION-->
</template>
<script>
export default {}
</script>