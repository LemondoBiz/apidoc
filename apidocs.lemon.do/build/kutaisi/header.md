<h2>Technical Requirements for Kutaisi API request v1</h2>
<h3>Web Service</h3><h3>Data type - Application/JSON</h3><h3>Request parameters main rules</h3><ul><li>Parameter names must be without white spaces</li><li>Parameter names must begin with small character</li><li>If parameter name contains more than one word, every next word should start with uppercase character</li><li>Parameter names must contain only alphabetic characters with locale (EN) </li></ul>
<br>
<h3>
List of all mehotds returned by service
</h3>
<ul>
	<li data-group="Methods" data-name="GetAbout" data-version="0.1.0" class="is-new">
	  <a href="#api-Methods-GetAbout">GetAbout</a>
	</li>
	<li data-group="Methods" data-name="GetListOfInfo" data-version="0.1.0" class="is-new">
	  <a href="#api-Methods-GetListOfInfo">GetListOfInfo</a>
	</li>
	<li data-group="Methods" data-name="GetListOfFlights" data-version="0.1.0" class="is-new">
	  <a href="#api-Methods-GetListOfFlights">GetListOfFlights</a>
	</li>
	<li data-group="Methods" data-name="GetListOfCities" data-version="0.1.0" class="is-new">
	  <a href="#api-Methods-GetListOfCities">GetListOfCities</a>
	</li>
	<li data-group="Methods" data-name="GetListOfFlightsByIds" data-version="0.1.0" class="is-new">
	  <a href="#api-Methods-GetListOfFlightsByIds">GetListOfFlightsByIds</a>
	</li>
	<li data-group="Methods" data-name="GetListOfRestaurantsAndShops" data-version="0.1.0" class="is-new">
	  <a href="#api-Methods-GetListOfRestaurantsAndShops">GetListOfRestaurantsAndShops</a>
	</li>
	<li data-group="Methods" data-name="GetTransportPrice" data-version="0.1.0" class="is-new">
	  <a href="#api-Methods-GetTransportPrice">GetTransportPrice</a>
	</li>
</ul>
<br>
<h3>
List of all Response/Status Codes returned by service. 
</h3>
<ul>
	<li><b>SUCCESS</b> 200</li>
	<li><b>BAD_REQUEST</b> 400</li>
	<li><b>NOT_FOUND</b> 404</li>
	<li><b>INTERNAL_SERVER_ERROR</b> 500</li>
</ul>

<h4> Please note, each response will have the key RESPONSE_CODE, holding the specific Response/Status code </h4>