BEGIN
DBMS_SCHEDULER.CREATE_JOB (
job_name => 'My_job',
job_type => 'STORED_PROCEDURE',
job_action => 'RATE_PROD',
start_date => '10-JAN-22 02.25.00 PM',
repeat_interval => 'FREQ=SECONDLY;INTERVAL=2',
end_date => '20-NOV-25 07.00.00 PM',
auto_drop => FALSE,
comments => 'My new job');
END;
/