/*
* campaign id
*/
    function load_campaigns_resources(){
    $.ajax({
        url: "./php/dashboard/API_getCampaignsResources.php",
        cache: false,
        success: function(data){
            $("#refresh_campaigns_resources").html(data);
           if(goAvatar) goAvatar._init(goOptions);
        }
    });
    }
    
    function load_campaigns_monitoring(){
    $.ajax({        
        url: "./php/dashboard/API_getCampaignsMonitoring.php",
        cache: false,
        dataType: 'json',
        success: function(values){
			var JSONString = values;
			var JSONObject = JSON.parse(JSONString);
			$('#campaigns_monitoring_table').DataTable({ 				
				destroy: true,
				data: JSONObject,
				responsive: true,
				stateSave: true,
				drawCallback: function(settings) {
					var pagination = $(this).closest('.dataTables_wrapper').find('.dataTables_paginate');
					pagination.toggle(this.api().page.info().pages > 1);
				},                               
			});
			//table.fnProcessingIndicator();
			if(goAvatar) goAvatar._init(goOptions);
        } 
    });
    }    

    function load_agents_monitoring_summary(){
		$.ajax({
			url: "./php/dashboard/API_getAgentsMonitoringSummary.php",
			cache: false,
			success: function(data){
				//console.log(data);
				$("#refresh_agents_monitoring_summary").html(data);
				if(goAvatar) goAvatar._init(goOptions);
			} 
		});
    }
    
    function load_view_agent_information(){        
		var user = document.getElementById("modal-username").innerText;
		$.ajax({
			type: "POST",
			url: "./php/dashboard/API_getAgentInformation.php",
			data: {
				user: user,
				filter: "userInfo"
			},
			cache: false,
		 dataType: "json",
			success: function(data){					
				var table = $("#view_agent_information_table").DataTable({ 
					data:data,
					"paging":   false,
					"bPaginate": false,
					"searching": false,
					"bInfo" : false,
					"destroy":true								
				});
			}
		});
    }
    
    function load_cluster_status() {
		$.ajax({
			url: "./php/dashboard/API_getClusterStatus.php",
			//cache: false,
			dataType: 'json',
			success: function(values){
				var JSONStringcluster = values;
				var JSONObjectcluster = JSON.parse(JSONStringcluster);
				$('#cluster-status').DataTable({ 
					destroy: true,
					responsive: true,
					data: JSONObjectcluster,
					searching: false,
					filter: false,
					info: false,
					paging: false,
					paginate: false,
					stateSave: true,
					drawCallback: function() {
						var pagination = $(this).closest('.dataTables_wrapper').find('.dataTables_paginate');
						pagination.toggle(this.api().page.info().pages > 1);
					},
					columnDefs:[
						{ searchable: false, targets: 0 },
						{ sortable: false, targets: 0 },
						{ className: "hidden-xs", targets: [ 1, 2, 3, 5 ] }
					]                                                                
				});
			if(goAvatar)	goAvatar._init(goOptions);
			} 
		});
    }  

    function load_realtime_agents_monitoring(){
		$.ajax({
			url: "./php/dashboard/API_getRealtimeAgentsMonitoring.php",
			cache: false,
			dataType: 'json',
			success: function(values){
				var JSONStringrealtime = values;
				var JSONObjectrealtime = JSON.parse(JSONStringrealtime);
				$('#realtime_agents_monitoring_table').DataTable({
					destroy:true,
					responsive:true,
					data:JSONObjectrealtime,
					stateSave: true,
					drawCallback: function() {
						var pagination = $(this).closest('.dataTables_wrapper').find('.dataTables_paginate');
						pagination.toggle(this.api().page.info().pages > 1);
					}
				});
				if(goAvatar) goAvatar._init(goOptions);
			} 
		});
    }

    function load_realtime_calls_monitoring(){
		$.ajax({
			url: "./php/dashboard/API_getRealtimeCallsMonitoring.php",
			cache: false,
			dataType: 'json',
			success: function(values){
				var JSONString = values;
				var JSONObject = JSON.parse(JSONString);
				$('#realtime_calls_monitoring_table').DataTable({ 					
					destroy:true,
					responsive:true,
					data:JSONObject,
					stateSave: true,
					drawCallback: function() {
						var pagination = $(this).closest('.dataTables_wrapper').find('.dataTables_paginate');
						pagination.toggle(this.api().page.info().pages > 1);
					}
				});
			if(goAvatar)	goAvatar._init(goOptions);
			} 
		});
    } 
    
    function load_realtime_sla_monitoring(){
    $.ajax({
        url: "./php/dashboard/API_getRealtimeSLAMonitoring.php",
        cache: false,
        dataType: 'json',
        success: function(values){
            //$("#refresh_realtime_agents_monitoring").html(values);
			var JSONStringrealtimesla = values;
			var JSONObjectrealtimesla = JSON.parse(JSONStringrealtimesla);
			var table = $('#realtime_sla_monitoring_table').DataTable({ 
					data:JSONObjectrealtimesla,
					"destroy":true,
					//"searching": false,
					stateSave: true,
					drawCallback: function(settings) {
						var pagination = $(this).closest('.dataTables_wrapper').find('.dataTables_paginate');
						pagination.toggle(this.api().page.info().pages > 1);
					},
					"oLanguage": {
							"sLengthMenu": "",
							"sEmptyTable": "No Data Available",
							"oPaginate": {
								"sPrevious": "Prev",
								"sNext": "Next"
							}
					},
					"bFilter": false,
					"bInfo": false,                                
					"columnDefs": [
						{
							className: "hidden-xs", 
							"targets": [ 1,2,3, 4 ] 
						}
					]
			});
			if(goAvatar) goAvatar._init(goOptions);
        } 
    });
    }     

/*
* Agents status box 
*/
    function load_totalagentscall(){
    $.ajax({
        url: "./php/dashboard/API_getTotalAgentsCall.php",
        cache: false,
        success: function(data){
            $("#refresh_totalagentscall").html(data);
        } 
    });
    }

    function load_totalagentspaused(){
    $.ajax({
        url: "./php/dashboard/API_getTotalAgentsPaused.php",
        cache: false,
        success: function(data){
            $("#refresh_totalagentspaused").html(data);
        } 
    });
    }

    function load_totalagentswaitingcall(){
    $.ajax({
        url: "./php/dashboard/API_getTotalAgentsWaitCalls.php",
        cache: false,
        success: function(data){
            $("#refresh_totalagentswaitcalls").html(data);
        } 
    });
    }
    /*
    * Sales status box 
    */
    function load_totalSales(){
		$.ajax({
			type: "POST",
			url: "./php/dashboard/API_getTotalSales.php",
			data: { type: "all-daily" },			
			cache: false,
			success: function(data){
				//console.log(data);
				$("#refresh_GetTotalSales").html(data);
			} 
		});
    }

    function load_totalOutSales(){
		$.ajax({
			type: "POST",
			url: "./php/dashboard/API_getTotalSales.php",
			data: { type: "out-daily" },			
			cache: false,
			success: function(data){
				//console.log(data);
				$("#refresh_GetTotalOutSales").html(data);
			} 
		});
	}
	
	function load_totalInSales(){
		$.ajax({
			type: "POST",
			url: "./php/dashboard/API_getTotalSales.php",
			data: { type: "in-daily" },			
			cache: false,
			success: function(data){
				//console.log(data);
				$("#refresh_GetTotalInSales").html(data);
			} 
		});
	}
	
    function load_INSalesHour(){
		$.ajax({
			type: "POST",
			url: "./php/dashboard/API_getTotalSales.php",
			data: { type: "in-hourly" },			
			cache: false,
			success: function(data){
				//console.log(data);
				$("#refresh_GetInSalesHour").html(data);
			} 
		});
    }

    function load_OUTSalesPerHour(){
		$.ajax({
			url: "./php/dashboard/API_getTotalSales.php",
			data: { type: "out-hourly" },			
			cache: false,
			success: function(data){
				console.log(data);
				$("#refresh_GetOutSalesHour").html(data);
			} 
		});
    }
    /*
    * Leads status box 
    */
    function load_TotalActiveLeads(){
    $.ajax({
        url: "./php/dashboard/API_getTotalActiveLeads.php",
        cache: false,
        success: function(data){
            $("#refresh_GetTotalActiveLeads").html(data);
        } 
    });
    }

    function load_LeadsinHopper(){
    $.ajax({
        url: "./php/dashboard/API_getLeadsinHopper.php",
        cache: false,
        success: function(data){
            $("#refresh_GetLeadsinHopper").html(data);
        } 
    });
    }

    function load_TotalDialableLeads(){
    $.ajax({
        url: "./php/dashboard/API_getTotalDialableLeads.php",
        cache: false,
        success: function(data){
            $("#refresh_GetTotalDialableLeads").html(data);
        } 
    });
    }
    /*
    * Calls status box 
    */
    function load_TotalCalls(){
    $.ajax({
		type: "POST",
        url: "./php/dashboard/API_getTotalCalls.php",
		data: { type: "all" },
        cache: false,
        success: function(data){
			console.log(data);
            $("#refresh_TotalCalls").html(data);
        } 
    });
    }
    
    function load_TotalInboundCalls(){
    $.ajax({
        //url: "./php/dashboard/API_getTotalInboundCalls.php",
		type: "POST",
		url: "./php/dashboard/API_getTotalCalls.php",
		data: { type: "inbound" },		
        cache: false,
        success: function(data){
			console.log(data);
            $("#refresh_TotalInCalls").html(data);
        } 
    });
    }

    function load_TotalOutboundCalls(){
    $.ajax({
        //url: "./php/dashboard/API_getTotalOutboundCalls.php",
		type: "POST",
		url: "./php/dashboard/API_getTotalCalls.php",
		data: { type: "outbound" },		
        cache: false,
        success: function(data){
			console.log(data);
            $("#refresh_TotalOutCalls").html(data);
        } 
    });
    }
    
    function load_RingingCalls(){
    $.ajax({
        url: "./php/dashboard/API_getTotalRingingCalls.php",
        cache: false,
        success: function(data){
            $("#refresh_RingingCalls").html(data);
        } 
    });
    }
    function load_IncomingQueue(){
    $.ajax({
        url: "./php/dashboard/API_getIncomingQueue.php",
        cache: false,
        success: function(data){
            $("#refresh_IncomingQueue").html(data);
        } 
    });
    }
    function load_AnsweredCalls(){
    $.ajax({
        url: "./php/dashboard/API_getTotalAnsweredCalls.php",
        cache: false,
        success: function(data){
            $("#refresh_AnsweredCalls").html(data);
        }
    });
    }
    function load_DroppedCalls(){
    $.ajax({
        url: "./php/dashboard/API_getTotalDroppedCalls.php",
        cache: false,
        success: function(data){
            $("#refresh_DroppedCalls").html(data);
        } 
    });
    }
    function load_LiveOutbound(){
    $.ajax({
        url: "./php/dashboard/API_getLiveOutbound.php",
        cache: false,
        success: function(data){
            $("#refresh_LiveOutbound").html(data);
        } 
    });
    }
        
