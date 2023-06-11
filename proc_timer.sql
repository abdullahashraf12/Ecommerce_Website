BEGIN
DBMS_SCHEDULER.CREATE_JOB (
job_name => 'My_job',
job_type => 'STORED_PROCEDURE',
job_action => 'RE_Calc_Rating',
start_date => '11-JUN-23 03.25.00 PM',
repeat_interval => 'FREQ=SECONDLY;INTERVAL=5',
end_date => '20-NOV-30 07.00.00 PM',
auto_drop => FALSE,
comments => 'My new job');
END;
/