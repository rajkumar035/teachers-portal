import React, { useState } from 'react';
import FormContainer from '../../components/FormContainer';
import FormLabel from '../../components/FormLabel';
import FormSelect from '../../components/FormSelect';
import PageContent from '../../components/PageContent';
import PageHeader from '../../components/PageHeader';
import Pagination from '../../components/Pagination';

const ClassTimetable = () => {
  const [semester, setSemester] = useState('1');
  const [deparment, setDepartment] = useState('Apparel Technology');
  const [batch, setBatch] = useState('2019');

  const handlePagination = (value) => setSemester(value);
  const handleDepartmentSelect = (value) => setDepartment(value);
  const handleBatchSelect = (value) => setBatch(value);

  return (
    <div>
      <PageHeader text='Class Timetable' />
      <PageContent>
        <form>
          <FormContainer>
            <div style={{ display: 'flex', gap: '2rem' }}>
              <FormLabel name='Department'>
                <FormSelect
                  handleFormSelect={handleDepartmentSelect}
                  data={[
                    'Apparel Technology',
                    'Automobile Engneering',
                    'Computer Engneering',
                    'Computer Networking',
                    'Electrical and Electronics Engneering',
                    'Electronics and Communication Engneering',
                    'Foundary Technology',
                    'Information Technology',
                    'Mechanical Engneering',
                    'Mechatronics Engneering',
                    'Textile Technology',
                  ]}
                  style={{ width: '100%' }}
                />
              </FormLabel>
              <FormLabel name='Batch'>
                <FormSelect
                  handleFormSelect={handleBatchSelect}
                  data={['2019', '2020', '2021']}
                  style={{ width: '100%' }}
                />
              </FormLabel>
            </div>
            <Pagination
              pageno={['1', '2', '3', '4', '5', '6', '7', '8']}
              pagination={semester}
              handlePagination={handlePagination}
            />
          </FormContainer>
        </form>
      </PageContent>
    </div>
  );
};

export default ClassTimetable;
